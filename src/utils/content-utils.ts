import { type CollectionEntry, getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils";

const includePublishedPost = ({ data }: CollectionEntry<"posts">): boolean =>
	import.meta.env.PROD ? data.draft !== true : true;

async function getAllPublishedPosts(): Promise<CollectionEntry<"posts">[]> {
	return getCollection("posts", includePublishedPost);
}

function sortPostsByPublishedDesc(
	posts: CollectionEntry<"posts">[],
): CollectionEntry<"posts">[] {
	return [...posts].sort(
		(a, b) =>
			new Date(b.data.published).getTime() -
			new Date(a.data.published).getTime(),
	);
}

async function getRawSortedPosts(): Promise<CollectionEntry<"posts">[]> {
	return sortPostsByPublishedDesc(await getAllPublishedPosts());
}

export async function getSortedPosts(): Promise<CollectionEntry<"posts">[]> {
	const sorted = await getRawSortedPosts();

	for (let i = 0; i < sorted.length; i++) {
		const prev = sorted[i + 1];
		const next = sorted[i - 1];
		if (next) {
			sorted[i].data.nextSlug = next.slug;
			sorted[i].data.nextTitle = next.data.title;
		}
		if (prev) {
			sorted[i].data.prevSlug = prev.slug;
			sorted[i].data.prevTitle = prev.data.title;
		}
	}

	return sorted;
}
export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	return sortPostsByPublishedDesc(await getAllPublishedPosts()).map((post) => ({
		slug: post.slug,
		data: post.data,
	}));
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getAllPublishedPosts();

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			countMap[tag] = (countMap[tag] || 0) + 1;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getAllPublishedPosts();
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName = String(post.data.category).trim();
		count[categoryName] = (count[categoryName] || 0) + 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: c,
			count: count[c],
			url: getCategoryUrl(c),
		});
	}
	return ret;
}
