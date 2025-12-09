import Key from "../i18nKey";
import type { Translation } from "../translation";

export const th: Translation = {
	[Key.home]: "หน้าแรก",
	[Key.about]: "เกี่ยวกับ",
	[Key.archive]: "คลัง",
	[Key.search]: "ค้นหา",

	[Key.tags]: "ป้ายกำกับ",
	[Key.categories]: "หมวดหมู่",
	[Key.recentPosts]: "โพสต์ล่าสุด",

	[Key.comments]: "ความคิดเห็น",

	[Key.untitled]: "ไม่ได้ตั้งชื่อ",
	[Key.uncategorized]: "ไม่ได้จัดหมวดหมู่",
	[Key.noTags]: "ไม่มีป้ายกำกับ",

	[Key.wordCount]: "คำ",
	[Key.wordsCount]: "คำ",
	[Key.minuteCount]: "นาที",
	[Key.minutesCount]: "นาที",
	[Key.postCount]: "โพสต์",
	[Key.postsCount]: "โพสต์",

	[Key.themeColor]: "สีของธีม",

	[Key.lightMode]: "สว่าง",
	[Key.darkMode]: "มืด",
	[Key.systemMode]: "ตามระบบ",

	[Key.more]: "ดูเพิ่ม",

	[Key.author]: "ผู้เขียน",
	[Key.publishedAt]: "เผยแพร่เมื่อ",
	[Key.license]: "สัญญาอนุญาต",
	[Key.friends]: "เพื่อน",

	[Key.contentValidityFreshLabel]: "เนื้อหาอัปเดต",
	[Key.contentValidityFreshDescription]:
		"เผยแพร่ภายใน {{freshMonths}} เดือนที่ผ่านมา รายละเอียดยังถูกต้อง",
	[Key.contentValidityCautionLabel]: "โปรดตรวจสอบข้อมูล",
	[Key.contentValidityCautionDescription]:
		"เผยแพร่มากกว่า {{freshMonths}} เดือน บางส่วนอาจเปลี่ยนไปแล้ว",
	[Key.contentValidityExpiredLabel]: "เนื้อหาหมดอายุ",
	[Key.contentValidityExpiredDescription]:
		"เผยแพร่มากกว่า {{cautionMonths}} เดือน ข้อมูลอาจไม่ถูกต้องแล้ว",
	[Key.initialLoading]: "กำลังโหลดหน้าเพจ อาจใช้เวลาสักครู่",
};
