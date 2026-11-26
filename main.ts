// The One-Liner Groan-Off entry: writes one original dad joke to the output file.
// Deterministic: no clock, no randomness, no network — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My watch is haunted. Every time I look at it, the hands have moved.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
