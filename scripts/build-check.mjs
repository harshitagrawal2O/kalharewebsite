// Verification build that writes to .next-check instead of .next, so it can
// run while `next dev` is up without corrupting the dev server's chunk
// manifests. See the "Builds vs. the dev server" section in CLAUDE.md.
//
// Invokes Next's CLI directly via process.execPath — no shell, no npx. The
// extra process layers those add have crashed Next's build workers on Windows
// (exit 3221225477 / 0xC0000005).
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

const { status, signal } = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, NEXT_DIST_DIR: ".next-check" },
});

if (signal) {
  console.error(`\nnext build terminated by signal ${signal}`);
  process.exit(1);
}

process.exit(status ?? 1);
