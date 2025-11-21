import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ja: Translation = {
  [Key.home]: "Home",
  [Key.about]: "About",
  [Key.archive]: "Archive",
  [Key.search]: "検索",

  [Key.tags]: "タグ",
  [Key.categories]: "カテゴリ",
  [Key.recentPosts]: "最近の投稿",

  [Key.comments]: "コメント",

  [Key.untitled]: "タイトルなし",
  [Key.uncategorized]: "カテゴリなし",
  [Key.noTags]: "タグなし",

  [Key.wordCount]: "文字",
  [Key.wordsCount]: "文字",
  [Key.minuteCount]: "分",
  [Key.minutesCount]: "分",
  [Key.postCount]: "件の投稿",
  [Key.postsCount]: "件の投稿",

  [Key.themeColor]: "テーマカラー",

  [Key.lightMode]: "ライト",
  [Key.darkMode]: "ダーク",
  [Key.systemMode]: "システム",

  [Key.more]: "もっと",

  [Key.author]: "作者",
  [Key.publishedAt]: "公開日",
  [Key.license]: "ライセンス",
  [Key.friends]: "フレンズ",

  [Key.contentValidityFreshLabel]: "最新の内容",
  [Key.contentValidityFreshDescription]:
    "{{freshMonths}}か月以内に公開されたため、記載内容はほぼ正確です。",
  [Key.contentValidityCautionLabel]: "情報更新に注意",
  [Key.contentValidityCautionDescription]:
    "{{freshMonths}}か月以上前に公開されました。内容が変わっている可能性があります。",
  [Key.contentValidityExpiredLabel]: "内容が古くなっています",
  [Key.contentValidityExpiredDescription]:
    "{{cautionMonths}}か月以上前に公開されたため、情報が大きく変わっているかもしれません。",
  [Key.initialLoading]: "ページを読み込んでいます。数秒かかる場合があります。",
};
