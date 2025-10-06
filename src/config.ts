import type {
	ExpressiveCodeConfig,
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
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		usePostCover: true,
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
		// {
		// 	src: "/favicon/icon-light.png",
		// 	theme: "light",
		// },
		// {
		// 	src: "/favicon/icon-dark.png",
		// 	theme: "dark",
		// },
	],
	icp: {
		enable: false,
		text: "",
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
