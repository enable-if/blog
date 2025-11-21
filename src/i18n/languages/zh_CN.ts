import Key from "../i18nKey";
import type { Translation } from "../translation";

export const zh_CN: Translation = {
  [Key.home]: "主页",
  [Key.about]: "关于",
  [Key.archive]: "归档",
  [Key.search]: "搜索",

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
};
