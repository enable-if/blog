import type {
	ContentValidityConfig,
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "std::enable_if的博客",
	subtitle: "面对天灾，我们并非无计可施。",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 110, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false, // Disabled - using Fluent background instead
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		usePostCover: true, // If true, use post cover (page banner prop) when provided.
		position: "bottom", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Set favicons here to override the defaults.
		// if null, use the default favicons provided in /public/favicon
		// {
		// 	src: "/favicon/icon-light.png",
		// 	theme: "light",
		// },
		// {
		// 	src: "/favicon/icon-dark.png",
		// 	theme: "dark",
		// },
	],
	cdn: {
		/**
		 * CDN usage guide:
		 *
		 * You can configure two independent CDN prefixes:
		 * 1) assetsPrefix (build-time prefix)
		 *    - Applies to: bundled outputs produced by Astro/Vite, e.g. JS, CSS, and imported/optimized images.
		 *    - How it works: URLs are written into the generated files during build.
		 *    - Requires rebuild: YES. Change the value, then run a new build before deployment.
		 *    - Example: "https://cdn.example.com" (protocol and domain recommended; trailing slash optional).
		 *
		 * 2) publicPrefix (runtime prefix)
		 *    - Applies to: files under /public (e.g. /favicon/*, /pagefind/*) and any path passed to asset("/path")
		 *      from utils/url-utils.ts.
		 *    - How it works: URLs are composed at runtime on the client; no need to rewrite build artifacts.
		 *    - Requires rebuild: Usually NO. Change the value and redeploy the pages.
		 *    - Example: "https://static.example.com".
		 *
		 * Common patterns:
		 * - Single CDN for everything: set both prefixes to the same origin.
		 * - Split responsibilities: use assetsPrefix for bundled assets, and publicPrefix for /public content.
		 * - Disable a prefix: set it to an empty string or undefined.
		 *
		 * Notes:
		 * - Ensure your CDN allows required CORS for fonts/scripts if needed, and enable compression (Brotli/Gzip).
		 * - Make sure /pagefind/* can be cached and fetched correctly from the CDN.
		 * - Slashes are normalized internally; trailing slash is optional.
		 */
		assetsPrefix: "",
		publicPrefix: "",
	},
	icp: {
		enable: false, // Whether to display ICP information in the footer
		text: "", // ICP text, e.g. "吉ICP备1234567890号-1"
		url: "https://beian.miit.gov.cn/",
	},
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/enable-if", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "std::enable_if",
	bio: "面对天灾，我们并非无计可施。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/enable-if",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are overridden in astro.config.mjs.
	// Provide both dark & light themes. These names are Shiki theme IDs supported by Expressive Code.
	darkTheme: "github-dark",
	lightTheme: "github-light",
};

export const giscusConfig: GiscusConfig = {
	enable: true,
	repo: "enable-if/blog",
	repoId: "R_kgDOP8IbFQ",
	category: "Announcements",
	categoryId: "DIC_kwDOP8IbFc4CwPd4",
	mapping: "pathname",
	strict: "0",
	reactionsEnabled: "1",
	emitMetadata: "0",
	inputPosition: "bottom",
	// Use custom CSS themes hosted under /public/giscus
	themeLight: "/giscus/theme-light.css",
	themeDark: "/giscus/theme-dark.css",
	lang: "zh-CN",
	loading: "lazy",
};

export const contentValidityConfig: ContentValidityConfig = {
	enable: true,
	thresholds: {
		freshMonths: 6,
		cautionMonths: 12,
	},
	banner: {
		fresh: {
			icon: "material-symbols:verified-rounded",
			accent: "#00ffa2ff",
		},
		caution: {
			icon: "material-symbols:info-rounded",
			accent: "#ff9100ff",
		},
		expired: {
			icon: "material-symbols:warning-rounded",
			accent: "#ff0019ff",
		},
	},
};
