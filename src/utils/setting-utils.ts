import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(hue));
}

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

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}
