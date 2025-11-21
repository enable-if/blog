import type {
	ContentValidityConfig,
	ContentValidityStage,
} from "@/types/config";

function getAgeInMonths(published: Date, reference: Date): number {
	if (reference <= published) {
		return 0;
	}
	let months =
		(reference.getFullYear() - published.getFullYear()) * 12 +
		(reference.getMonth() - published.getMonth());
	if (reference.getDate() < published.getDate()) {
		months -= 1;
	}
	return months;
}

export function resolveContentValidityStage(
	published: Date,
	reference: Date,
	config: ContentValidityConfig,
): ContentValidityStage {
	const { thresholds } = config;
	const ageInMonths = getAgeInMonths(published, reference);
	if (ageInMonths > thresholds.cautionMonths) {
		return "expired";
	}
	if (ageInMonths > thresholds.freshMonths) {
		return "caution";
	}
	return "fresh";
}

export function shouldShowContentValidityBanner(
	published?: Date,
	config?: ContentValidityConfig,
): published is Date {
	return Boolean(config?.enable && published instanceof Date);
}
