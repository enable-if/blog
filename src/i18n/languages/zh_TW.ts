import Key from "../i18nKey";
import type { Translation } from "../translation";

export const zh_TW: Translation = {
	[Key.home]: "首頁",
	[Key.about]: "關於",
	[Key.archive]: "彙整",
	[Key.search]: "搜尋",

	[Key.tags]: "標籤",
	[Key.categories]: "分類",
	[Key.recentPosts]: "最新文章",

	[Key.comments]: "評論",

	[Key.untitled]: "無標題",
	[Key.uncategorized]: "未分類",
	[Key.noTags]: "無標籤",

	[Key.wordCount]: "字",
	[Key.wordsCount]: "字",
	[Key.minuteCount]: "分鐘",
	[Key.minutesCount]: "分鐘",
	[Key.postCount]: "篇文章",
	[Key.postsCount]: "篇文章",

	[Key.themeColor]: "主題色",

	[Key.lightMode]: "亮色",
	[Key.darkMode]: "暗色",
	[Key.systemMode]: "跟隨系統",

	[Key.more]: "更多",

	[Key.author]: "作者",
	[Key.publishedAt]: "發佈於",
	[Key.license]: "許可協議",
	[Key.friends]: "友鏈",

	[Key.contentValidityFreshLabel]: "內容有效",
	[Key.contentValidityFreshDescription]:
		"發佈未滿{{freshMonths}}個月，資訊仍維持最新。",
	[Key.contentValidityCautionLabel]: "資訊可能有變",
	[Key.contentValidityCautionDescription]:
		"發佈已超過{{freshMonths}}個月，部分細節可能不同。",
	[Key.contentValidityExpiredLabel]: "內容可能過期",
	[Key.contentValidityExpiredDescription]:
		"發佈已超過{{cautionMonths}}個月，資訊可能完全改變。",
};
