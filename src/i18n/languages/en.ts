import Key from "../i18nKey";
import type { Translation } from "../translation";

export const en: Translation = {
	[Key.home]: "Home",
	[Key.about]: "About",
	[Key.archive]: "Archive",
	[Key.search]: "Search",
	[Key.settings]: "Settings",

	[Key.tags]: "Tags",
	[Key.categories]: "Categories",
	[Key.recentPosts]: "Recent Posts",

	[Key.comments]: "Comments",

	[Key.untitled]: "Untitled",
	[Key.uncategorized]: "Uncategorized",
	[Key.noTags]: "No Tags",

	[Key.wordCount]: "word",
	[Key.wordsCount]: "words",
	[Key.minuteCount]: "minute",
	[Key.minutesCount]: "minutes",
	[Key.postCount]: "post",
	[Key.postsCount]: "posts",

	[Key.themeColor]: "Theme Color",

	[Key.lightMode]: "Light",
	[Key.darkMode]: "Dark",
	[Key.systemMode]: "System",

	[Key.more]: "More",

	[Key.author]: "Author",
	[Key.publishedAt]: "Published at",
	[Key.license]: "License",
	[Key.friends]: "Friends",

	[Key.contentValidityFreshLabel]: "Up-to-date content",
	[Key.contentValidityFreshDescription]:
		"Published within the last {{freshMonths}} months; details remain accurate.",
	[Key.contentValidityCautionLabel]: "Check for updates",
	[Key.contentValidityCautionDescription]:
		"Published over {{freshMonths}} months ago; some details may have changed.",
	[Key.contentValidityExpiredLabel]: "Expired content",
	[Key.contentValidityExpiredDescription]:
		"Published over {{cautionMonths}} months ago; information could be outdated.",
	[Key.initialLoading]: "Loading the page, this may take a few seconds.",

	// Settings page
	[Key.settingsAdvancedMaterials]: "Advanced Materials",
	[Key.settingsAdvancedMaterialsDesc]:
		"Enable acrylic blur, animated backgrounds and other visual effects. Disable for better performance.",
	[Key.settingsAnalytics]: "Usage Analytics",
	[Key.settingsAnalyticsDesc]:
		"Allow Microsoft Clarity to collect anonymous usage data to improve site experience.",
	[Key.settingsPerformance]: "Performance",
	[Key.settingsPrivacy]: "Privacy",
	[Key.settingsPersonalization]: "Personalization",
	[Key.settingsFontSettings]: "Font Settings",
	[Key.settingsFontSystem]: "System Default",
	[Key.settingsFontMiSans]: "MiSans",
	[Key.settingsFontHarmonyOS]: "HarmonyOS Sans",
	[Key.settingsMaterialLevel]: "Material Level",
	[Key.settingsMaterialOpaque]: "Opaque",
	[Key.settingsMaterialBasic]: "Basic",
	[Key.settingsMaterialFull]: "Full",
	[Key.settingsMaterialOpaqueDesc]: "Solid backgrounds, best performance",
	[Key.settingsMaterialBasicDesc]: "Semi-transparent, no blur effect",
	[Key.settingsMaterialFullDesc]: "Acrylic effect, dynamic background",
	[Key.settingsLowPerfWarning]: "Your device may have limited performance. Enabling advanced materials could affect browsing experience.",
};
