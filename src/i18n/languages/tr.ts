import Key from "../i18nKey";
import type { Translation } from "../translation";

export const tr: Translation = {
  [Key.home]: "Anasayfa",
  [Key.about]: "Hakkında",
  [Key.archive]: "Arşiv",
  [Key.search]: "Ara",

  [Key.tags]: "Taglar",
  [Key.categories]: "Katagoriler",
  [Key.recentPosts]: "Son Paylaşımlar",

  [Key.comments]: "Yorumlar",

  [Key.untitled]: "Başlıksız",
  [Key.uncategorized]: "Katagorisiz",
  [Key.noTags]: "Tag Bulunamadı",

  [Key.wordCount]: "kelime",
  [Key.wordsCount]: "kelime",
  [Key.minuteCount]: "dakika",
  [Key.minutesCount]: "dakika",
  [Key.postCount]: "gönderi",
  [Key.postsCount]: "gönderiler",

  [Key.themeColor]: "Tema Rengi",

  [Key.lightMode]: "Aydınlık",
  [Key.darkMode]: "Koyu",
  [Key.systemMode]: "Sistem",

  [Key.more]: "Daha Fazla",

  [Key.author]: "Yazar",
  [Key.publishedAt]: "Yayınlanma:",
  [Key.license]: "Lisans",
  [Key.friends]: "Arkadaşlar",

  [Key.contentValidityFreshLabel]: "Güncel içerik",
  [Key.contentValidityFreshDescription]:
    "Son {{freshMonths}} ay içinde yayımlandı; ayrıntılar hâlâ geçerli.",
  [Key.contentValidityCautionLabel]: "Güncellemeleri kontrol et",
  [Key.contentValidityCautionDescription]:
    "{{freshMonths}} aydan uzun süre önce yayımlandı; bazı bilgiler değişmiş olabilir.",
  [Key.contentValidityExpiredLabel]: "Süresi dolan içerik",
  [Key.contentValidityExpiredDescription]:
    "{{cautionMonths}} aydan uzun süre önce yayımlandı; bilgiler geçerliliğini yitirmiş olabilir.",
  [Key.initialLoading]: "Sayfa yükleniyor, bu birkaç saniye sürebilir.",
};
