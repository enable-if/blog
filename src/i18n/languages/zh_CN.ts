import Key from "../i18nKey";
import type { Translation } from "../translation";

export const zh_CN: Translation = {
	[Key.home]: "主页",
	[Key.about]: "关于",
	[Key.archive]: "归档",
	[Key.search]: "搜索",
	[Key.settings]: "设置",

	[Key.tags]: "标签",
	[Key.categories]: "分类",
	[Key.recentPosts]: "最新文章",

	[Key.comments]: "评论",

	[Key.untitled]: "无标题",
	[Key.uncategorized]: "未分类",
	[Key.noTags]: "无标签",

	[Key.wordCount]: "字",
	[Key.wordsCount]: "字",
	[Key.minuteCount]: "分钟",
	[Key.minutesCount]: "分钟",
	[Key.postCount]: "篇文章",
	[Key.postsCount]: "篇文章",

	[Key.themeColor]: "主题色",

	[Key.lightMode]: "亮色",
	[Key.darkMode]: "暗色",
	[Key.systemMode]: "跟随系统",

	[Key.more]: "更多",

	[Key.author]: "作者",
	[Key.publishedAt]: "发布于",
	[Key.license]: "许可协议",
	[Key.friends]: "友链",

	[Key.contentValidityFreshLabel]: "内容有效",
	[Key.contentValidityFreshDescription]:
		"发布未满{{freshMonths}}个月，文内信息应仍保持最新。",
	[Key.contentValidityCautionLabel]: "信息可能有变",
	[Key.contentValidityCautionDescription]:
		"发布已超过{{freshMonths}}个月，部分细节可能与现状不同。",
	[Key.contentValidityExpiredLabel]: "内容可能过期",
	[Key.contentValidityExpiredDescription]:
		"发布已超过{{cautionMonths}}个月，信息可能已完全变化。",
	[Key.initialLoading]: "正在加载页面，这可能需要几秒钟。",

	// Settings page
	[Key.settingsAdvancedMaterials]: "高级材质",
	[Key.settingsAdvancedMaterialsDesc]:
		"启用亚克力模糊、动画背景等视觉效果。关闭可提升性能。",
	[Key.settingsAnalytics]: "使用情况分析",
	[Key.settingsAnalyticsDesc]:
		"允许 Microsoft Clarity 收集匿名使用数据以改进网站体验。",
	[Key.settingsPerformance]: "性能",
	[Key.settingsPrivacy]: "隐私",
	[Key.settingsPersonalization]: "个性化",
	[Key.settingsFontSettings]: "字体设置",
	[Key.settingsFontSystem]: "跟随系统",
	[Key.settingsFontMiSans]: "MiSans",
	[Key.settingsFontHarmonyOS]: "HarmonyOS Sans",
	[Key.settingsMaterialLevel]: "材质等级",
	[Key.settingsMaterialOpaque]: "不透明",
	[Key.settingsMaterialBasic]: "基本",
	[Key.settingsMaterialFull]: "完整",
	[Key.settingsMaterialOpaqueDesc]: "纯色背景，最佳性能",
	[Key.settingsMaterialBasicDesc]: "半透明背景，无模糊效果",
	[Key.settingsMaterialFullDesc]: "亚克力效果，动态背景",
	[Key.settingsLowPerfWarning]: "检测到您的设备性能可能较低，启用高级材质可能会影响浏览体验。",
};
