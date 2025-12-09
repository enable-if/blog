import Key from "../i18nKey";
import type { Translation } from "../translation";

export const vi: Translation = {
	[Key.home]: "Trang chủ",
	[Key.about]: "Giới thiệu",
	[Key.archive]: "Kho bài",
	[Key.search]: "Tìm kiếm",

	[Key.tags]: "Thẻ",
	[Key.categories]: "Danh mục",
	[Key.recentPosts]: "Bài viết mới nhất",

	[Key.comments]: "Bình luận",

	[Key.untitled]: "Không tiêu đề",
	[Key.uncategorized]: "Chưa phân loại",
	[Key.noTags]: "Chưa có thẻ",

	[Key.wordCount]: "từ",
	[Key.wordsCount]: "từ",
	[Key.minuteCount]: "phút đọc",
	[Key.minutesCount]: "phút đọc",
	[Key.postCount]: "bài viết",
	[Key.postsCount]: "bài viết",

	[Key.themeColor]: "Màu giao diện",

	[Key.lightMode]: "Sáng",
	[Key.darkMode]: "Tối",
	[Key.systemMode]: "Hệ thống",

	[Key.more]: "Thêm",

	[Key.author]: "Tác giả",
	[Key.publishedAt]: "Đăng vào lúc",
	[Key.license]: "Giấy phép bản quyền",
	[Key.friends]: "Bạn bè",

	[Key.contentValidityFreshLabel]: "Nội dung mới",
	[Key.contentValidityFreshDescription]:
		"Đăng trong {{freshMonths}} tháng gần đây; thông tin vẫn chính xác.",
	[Key.contentValidityCautionLabel]: "Kiểm tra cập nhật",
	[Key.contentValidityCautionDescription]:
		"Đăng cách đây hơn {{freshMonths}} tháng; một số chi tiết có thể đã thay đổi.",
	[Key.contentValidityExpiredLabel]: "Nội dung đã lỗi thời",
	[Key.contentValidityExpiredDescription]:
		"Đăng cách đây hơn {{cautionMonths}} tháng; thông tin có thể không còn đúng.",
	[Key.initialLoading]: "Đang tải trang, có thể mất vài giây.",
};
