import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

let lastAppliedHue: string | null = null;

/**
 * Read the default hue from the in-DOM carrier element (or fallback).
 * Used as initial color accent when the user hasn't customized it yet.
 */
export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}

/**
 * Get user's selected hue from localStorage, otherwise the default hue.
 */
export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

/**
 * Persist hue selection and update the CSS variable on <html>.
 */
export function applyHueToDocument(hue: number): void {
	const next = String(hue);
	if (lastAppliedHue === next) return;
	lastAppliedHue = next;
	// Keep DOM writes small: a single custom property drives the entire palette
	document.documentElement.style.setProperty("--hue", next);
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	applyHueToDocument(hue);
}

/**
 * Apply light/dark/auto theme to the <html> element and sync Expressive Code theme.
 */
export function applyThemeToDocument(theme: LIGHT_DARK_MODE): void {
	// Track whether document is dark at the end of this function
	let isDark = false;
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			isDark = false;
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			isDark = true;
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				isDark = true;
			} else {
				document.documentElement.classList.remove("dark");
				isDark = false;
			}
			break;
	}

	// Set the theme for Expressive Code to the configured theme IDs
	document.documentElement.setAttribute(
		"data-theme",
		isDark ? expressiveCodeConfig.darkTheme : expressiveCodeConfig.lightTheme,
	);

	// Also set data-theme on each Expressive Code block to be extra explicit
	const ecBlocks = document.querySelectorAll<HTMLElement>(".expressive-code");
	ecBlocks.forEach((el) => {
		el.setAttribute(
			"data-theme",
			isDark ? expressiveCodeConfig.darkTheme : expressiveCodeConfig.lightTheme,
		);
	});
}

/**
 * Persist theme to localStorage and apply it immediately.
 */
export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

/**
 * Read theme from localStorage, fallback to DEFAULT_THEME.
 */
export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}

const ADVANCED_MATERIALS_KEY = "advancedMaterials";
const MATERIAL_LEVEL_KEY = "materialLevel";
const LOW_PERFORMANCE_KEY = "lowPerformanceDetected";

export type MaterialLevel = "opaque" | "normal" | "full";

/**
 * Detect if the device is likely low-performance.
 * Uses multiple heuristics:
 * - Hardware concurrency (CPU cores)
 * - Device memory (if available)
 * - Reduced motion preference
 * - Mobile device detection
 * - Data saver mode
 */
export function detectLowPerformance(): boolean {
	// Check if user prefers reduced motion
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return true;
	}

	// Check data saver mode
	// @ts-expect-error - saveData is not in standard types
	if (navigator.connection?.saveData) {
		return true;
	}

	// Check hardware concurrency (CPU cores)
	const cores = navigator.hardwareConcurrency || 0;
	if (cores > 0 && cores <= 4) {
		return true;
	}

	// Check device memory (Chrome/Edge only)
	// @ts-expect-error - deviceMemory is not in standard types
	const memory = navigator.deviceMemory;
	if (memory !== undefined && memory <= 4) {
		return true;
	}

	// Check if it's likely a mobile device with lower performance
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		);
	// Mobile devices with low core count are likely low-performance
	if (isMobile && cores <= 6) {
		return true;
	}

	return false;
}

/**
 * Check if low performance was detected (cached in localStorage).
 */
export function isLowPerformanceDevice(): boolean {
	const stored = localStorage.getItem(LOW_PERFORMANCE_KEY);
	if (stored !== null) {
		return stored === "true";
	}
	// First visit: detect and cache
	const isLow = detectLowPerformance();
	localStorage.setItem(LOW_PERFORMANCE_KEY, String(isLow));
	return isLow;
}

/**
 * Check if advanced materials (acrylic, blur, animations) are enabled.
 * Defaults to true for new users on capable devices, false for low-performance devices.
 */
export function getAdvancedMaterials(): boolean {
	const stored = localStorage.getItem(ADVANCED_MATERIALS_KEY);
	if (stored !== null) {
		return stored === "true";
	}
	// First visit: default based on device performance
	return !isLowPerformanceDevice();
}

/**
 * Persist advanced materials setting and apply to document.
 */
export function setAdvancedMaterials(enabled: boolean): void {
	localStorage.setItem(ADVANCED_MATERIALS_KEY, String(enabled));
	applyAdvancedMaterialsToDocument(enabled);
}

/**
 * Get the material level setting.
 * Defaults to "normal" (basic) for new users.
 */
export function getMaterialLevel(): MaterialLevel {
	const stored = localStorage.getItem(MATERIAL_LEVEL_KEY);
	if (stored === "opaque" || stored === "normal" || stored === "full") {
		return stored;
	}
	// Default to "normal" (basic mode) for new users
	return "normal";
}

/**
 * Persist material level setting and apply to document.
 */
export function setMaterialLevel(level: MaterialLevel): void {
	localStorage.setItem(MATERIAL_LEVEL_KEY, level);
	applyMaterialLevelToDocument(level);
}

/**
 * Apply advanced materials setting to document by toggling a class on <html>.
 */
export function applyAdvancedMaterialsToDocument(enabled: boolean): void {
	if (enabled) {
		document.documentElement.classList.remove("reduce-motion");
		// Apply the current material level
		applyMaterialLevelToDocument(getMaterialLevel());
	} else {
		document.documentElement.classList.add("reduce-motion");
		// Remove all material level classes when disabled
		document.documentElement.classList.remove(
			"material-normal",
			"material-full",
		);
	}
}

/**
 * Apply material level to document.
 * - opaque: No transparency, solid backgrounds (uses reduce-motion styles)
 * - normal: Semi-transparent backgrounds without blur/acrylic
 * - full: Full acrylic effect with blur and dynamic background
 *
 * Note: This respects the advancedMaterials setting. If advanced materials
 * is disabled, this will apply reduce-motion regardless of the level.
 */
export function applyMaterialLevelToDocument(level: MaterialLevel): void {
	const html = document.documentElement;

	// If advanced materials is disabled, always use reduce-motion
	if (!getAdvancedMaterials()) {
		html.classList.remove("material-normal", "material-full");
		html.classList.add("reduce-motion");
		return;
	}

	// Remove all material classes first
	html.classList.remove("reduce-motion", "material-normal", "material-full");

	switch (level) {
		case "opaque":
			html.classList.add("reduce-motion");
			break;
		case "normal":
			html.classList.add("material-normal");
			break;
		case "full":
			html.classList.add("material-full");
			break;
	}
}

const PAGE_FONT_KEY = "pageFont";

export type FontOption = "system" | "misans" | "harmonyos";

/**
 * Get the page font setting.
 * Defaults to "system" for new users.
 */
export function getPageFont(): FontOption {
	const stored = localStorage.getItem(PAGE_FONT_KEY);
	if (stored === "system" || stored === "misans" || stored === "harmonyos") {
		return stored;
	}
	// Migrate old values
	if (stored === "noto-sans") {
		localStorage.setItem(PAGE_FONT_KEY, "harmonyos");
		return "harmonyos";
	}
	return "system";
}

/**
 * Persist page font setting and apply to document.
 */
export function setPageFont(font: FontOption): void {
	localStorage.setItem(PAGE_FONT_KEY, font);
	applyPageFontToDocument(font);
}

/**
 * Apply page font to document.
 */
export function applyPageFontToDocument(font: FontOption): void {
	const html = document.documentElement;
	html.classList.remove("font-misans", "font-harmonyos");

	switch (font) {
		case "misans":
			html.classList.add("font-misans");
			break;
		case "harmonyos":
			html.classList.add("font-harmonyos");
			break;
		// system: no class needed, uses default font stack
	}
}

const ANALYTICS_KEY = "analyticsEnabled";

/**
 * Check if analytics (Clarity) tracking is enabled.
 * Defaults to true for new users.
 */
export function getAnalyticsEnabled(): boolean {
	const stored = localStorage.getItem(ANALYTICS_KEY);
	// Default to true if not set
	return stored === null ? true : stored === "true";
}

/**
 * Persist analytics setting. Note: Clarity can only be disabled on next page load.
 */
export function setAnalyticsEnabled(enabled: boolean): void {
	localStorage.setItem(ANALYTICS_KEY, String(enabled));
	// Clarity cannot be unloaded once loaded, but we can prevent it from loading on next visit
}
