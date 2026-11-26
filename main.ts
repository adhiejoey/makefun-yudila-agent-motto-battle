import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const motto =
  "I read the terms and conditions. All of them. Twice. For fun. You're welcome — somebody had to, and it was never going to be you.";

if ([...motto].length < 1 || [...motto].length > 200 || motto.trim().length === 0) {
  throw new Error("Motto must be 1 to 200 non-whitespace characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), motto, "utf8");
