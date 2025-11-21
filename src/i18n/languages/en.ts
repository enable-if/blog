import Key from "../i18nKey";
import type { Translation } from "../translation";

export const en: Translation = {
	[Key.home]: "Home",
	[Key.about]: "About",
	[Key.archive]: "Archive",
	[Key.search]: "Search",

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
};
