import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

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
export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	document.documentElement.style.setProperty("--hue", String(hue));
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
