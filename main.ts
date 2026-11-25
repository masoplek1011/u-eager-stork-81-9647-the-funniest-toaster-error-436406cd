// The Funniest Toaster Error Message — make.fun entry.
// Writes one line (<=120 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Deterministic, stdlib only, no network,
// no environment secrets, no git history reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "E07: crumb tray full. I carried your crumbs quietly for 214 mornings. Enough.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
