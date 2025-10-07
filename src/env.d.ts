/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare global {
	interface ImportMetaEnv {
		readonly PUBLIC_ASSET_PREFIX?: string;
	}
}

export {};
