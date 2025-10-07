import type { Favicon } from "@/types/config";
import { asset } from "@/utils/url-utils";

export const defaultFavicons: Favicon[] = [
	{
		src: asset("/favicon/favicon-light-32.png"),
		theme: "light",
		sizes: "32x32",
	},
	{
		src: asset("/favicon/favicon-light-128.png"),
		theme: "light",
		sizes: "128x128",
	},
	{
		src: asset("/favicon/favicon-light-180.png"),
		theme: "light",
		sizes: "180x180",
	},
	{
		src: asset("/favicon/favicon-light-192.png"),
		theme: "light",
		sizes: "192x192",
	},
	{
		src: asset("/favicon/favicon-dark-32.png"),
		theme: "dark",
		sizes: "32x32",
	},
	{
		src: asset("/favicon/favicon-dark-128.png"),
		theme: "dark",
		sizes: "128x128",
	},
	{
		src: asset("/favicon/favicon-dark-180.png"),
		theme: "dark",
		sizes: "180x180",
	},
	{
		src: asset("/favicon/favicon-dark-192.png"),
		theme: "dark",
		sizes: "192x192",
	},
];
