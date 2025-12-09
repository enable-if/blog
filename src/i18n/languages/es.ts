import Key from "../i18nKey";
import type { Translation } from "../translation";

export const es: Translation = {
	[Key.home]: "Inicio",
	[Key.about]: "Sobre mí",
	[Key.archive]: "Archivo",
	[Key.search]: "Buscar",

	[Key.tags]: "Etiquetas",
	[Key.categories]: "Categorías",
	[Key.recentPosts]: "Publicaciones recientes",

	[Key.comments]: "Comentarios",

	[Key.untitled]: "Sin título",
	[Key.uncategorized]: "Sin categoría",
	[Key.noTags]: "Sin etiquetas",

	[Key.wordCount]: "palabra",
	[Key.wordsCount]: "palabras",
	[Key.minuteCount]: "minuto",
	[Key.minutesCount]: "minutos",
	[Key.postCount]: "publicación",
	[Key.postsCount]: "publicaciones",

	[Key.themeColor]: "Color del tema",

	[Key.lightMode]: "Claro",
	[Key.darkMode]: "Oscuro",
	[Key.systemMode]: "Sistema",

	[Key.more]: "Más",

	[Key.author]: "Autor",
	[Key.publishedAt]: "Publicado el",
	[Key.license]: "Licencia",
	[Key.friends]: "Amigos",

	[Key.contentValidityFreshLabel]: "Contenido actualizado",
	[Key.contentValidityFreshDescription]:
		"Publicado en los últimos {{freshMonths}} meses; los detalles siguen vigentes.",
	[Key.contentValidityCautionLabel]: "Revisa posibles cambios",
	[Key.contentValidityCautionDescription]:
		"Publicado hace más de {{freshMonths}} meses; algunos datos pueden haber cambiado.",
	[Key.contentValidityExpiredLabel]: "Contenido vencido",
	[Key.contentValidityExpiredDescription]:
		"Publicado hace más de {{cautionMonths}} meses; la información podría estar obsoleta.",
	[Key.initialLoading]: "Preparando la experiencia de lectura…",
};
