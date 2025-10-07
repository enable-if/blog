import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		/** If true, use post cover (page banner prop) when provided. */
		usePostCover?: boolean;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
	cdn?: {
		/** Prefix for bundled assets (JS/CSS/optimized images) at build time */
		assetsPrefix?: string;
		/** Prefix for public/ static files at runtime (e.g., /favicon/*, /pagefind/*) */
		publicPrefix?: string;
	};
	icp?: {
		enable: boolean;
		text: string;
		url?: string;
	};
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
	Friends = 3,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	/**
	 * Theme name for dark mode (e.g. 'github-dark', 'dark-plus', etc.)
	 */
	darkTheme: string;
	/**
	 * Theme name for light mode (e.g. 'github-light', 'light-plus', etc.)
	 */
	lightTheme: string;
};

export type GiscusConfig = {
	/** Enable/disable comments globally */
	enable: boolean;
	repo: string;
	repoId: string;
	category: string;
	categoryId: string;
	mapping?: "pathname" | "url" | "title" | "og:title" | "specific";
	term?: string; // when mapping = specific
	strict?: "0" | "1";
	reactionsEnabled?: "0" | "1";
	emitMetadata?: "0" | "1";
	inputPosition?: "top" | "bottom";
	themeLight?: string; // giscus theme name or CSS URL
	themeDark?: string; // giscus theme name or CSS URL
	lang?: string;
	loading?: "lazy" | "eager";
};
