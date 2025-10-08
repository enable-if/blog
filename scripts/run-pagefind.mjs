#!/usr/bin/env node
import { execSync } from "node:child_process";
import os from "node:os";

function log(msg) {
	console.log(`[pagefind] ${msg}`);
}

function run(cmd) {
	execSync(cmd, { stdio: "inherit", env: process.env });
}

const platform = os.platform(); // 'win32', 'darwin', 'linux'
const arch = os.arch(); // 'x64', 'arm64', etc.

try {
	// Try to run pagefind via local bin first
	log(`Running Pagefind (platform=${platform}, arch=${arch})`);
	run("npx --no-install pagefind --site dist");
} catch (err) {
	// On Windows ARM64, upstream binary may be missing; try the extended package, then fallback to skip
	log(`First attempt failed: ${err?.message || err}`);
	try {
		log("Trying pagefind_extended fallback...");
		run("npx --yes pagefind_extended --site dist");
	} catch (err2) {
		log(`Extended fallback failed: ${err2?.message || err2}`);
		// Last resort: do not fail the build; print guidance
		log(
			"Skipping Pagefind index generation due to unsupported platform or install failure.",
		);
		log("You can run Pagefind manually on a supported platform or CI later.");
	}
}
