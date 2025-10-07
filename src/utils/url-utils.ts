import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { siteConfig } from "@/config";

export function pathsEqual(path1: string, path2: string): boolean {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

export function getPostUrlBySlug(slug: string): string {
	return url(`/posts/${slug}/`);
}

export function getTagUrl(tag: string): string {
	if (!tag) return url("/archive/");
	return url(`/archive/?tag=${encodeURIComponent(tag.trim())}`);
}

export function getCategoryUrl(category: string | null): string {
	if (
		!category ||
		category.trim() === "" ||
		category.trim().toLowerCase() === i18n(I18nKey.uncategorized).toLowerCase()
	)
		return url("/archive/?uncategorized=true");
	return url(`/archive/?category=${encodeURIComponent(category.trim())}`);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string): string {
	return joinUrl("", import.meta.env.BASE_URL, path);
}

/**
 * Build a CDN-aware absolute path for public assets under `public/`.
 * In dev, returns the original path. In prod, will prefix with PUBLIC_ASSET_PREFIX if provided.
 * Use for href/src that point to files emitted to / (e.g. /pagefind/pagefind.js, /favicon/*, images under public).
 */
export function asset(path: string): string {
	const p = url(path);
	const prefix = siteConfig.cdn?.publicPrefix;
	if (typeof prefix === "string" && prefix.trim().length > 0) {
		// Ensure single slash join
		return joinUrl(prefix.replace(/\/$/, ""), p);
	}
	return p;
}
