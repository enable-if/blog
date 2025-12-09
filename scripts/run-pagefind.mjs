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
	log(`First attempt failed: ${err?.message || err}`);
	log(
		"Skipping Pagefind index generation due to unsupported platform or install failure.",
	);
	log("You can run Pagefind manually on a supported platform or CI later.");
}
