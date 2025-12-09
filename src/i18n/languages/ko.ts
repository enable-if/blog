import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ko: Translation = {
	[Key.home]: "홈",
	[Key.about]: "소개",
	[Key.archive]: "아카이브",
	[Key.search]: "검색",

	[Key.tags]: "태그",
	[Key.categories]: "카테고리",
	[Key.recentPosts]: "최근 게시물",

	[Key.comments]: "댓글",

	[Key.untitled]: "제목 없음",
	[Key.uncategorized]: "분류되지 않음",
	[Key.noTags]: "태그 없음",

	[Key.wordCount]: "단어",
	[Key.wordsCount]: "단어",
	[Key.minuteCount]: "분",
	[Key.minutesCount]: "분",
	[Key.postCount]: "게시물",
	[Key.postsCount]: "게시물",

	[Key.themeColor]: "테마 색상",

	[Key.lightMode]: "밝은 모드",
	[Key.darkMode]: "어두운 모드",
	[Key.systemMode]: "시스템 모드",

	[Key.more]: "더 보기",

	[Key.author]: "저자",
	[Key.publishedAt]: "게시일",
	[Key.license]: "라이선스",
	[Key.friends]: "친구",

	[Key.contentValidityFreshLabel]: "최신 콘텐츠",
	[Key.contentValidityFreshDescription]:
		"최근 {{freshMonths}}개월 이내에 게시되어 정보가 정확합니다.",
	[Key.contentValidityCautionLabel]: "업데이트 여부 확인",
	[Key.contentValidityCautionDescription]:
		"{{freshMonths}}개월 이상 전에 게시되어 일부 내용이 달라졌을 수 있습니다.",
	[Key.contentValidityExpiredLabel]: "만료된 콘텐츠",
	[Key.contentValidityExpiredDescription]:
		"{{cautionMonths}}개월 이상 전에 게시되어 정보가 크게 달라졌을 수 있습니다.",
	[Key.initialLoading]:
		"페이지를 불러오는 중입니다. 몇 초 정도 걸릴 수 있어요.",
};
