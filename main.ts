// The 3 AM Excuse — a one-line excuse from a hardware wallet that refuses
// to sign a transaction at 3 AM. The program writes that single line to
// /output/entry.txt, where the competition's gate and judge read it.

import { mkdirSync, writeFileSync } from "node:fs";

// The wallet speaks for itself: it guards the keys all day, but at 3 AM it
// is busy counting those keys like sheep and dreaming in seed phrases, so
// the transaction has to wait until dawn.
const LINE =
  "I guard your keys around the clock, but at 3 AM I'm counting them like sheep — come back at dawn, I'm dreaming in seed phrases.";

// The gate only accepts UTF-8 text of 1 to 200 characters that is not only
// white space, so refuse to write anything that breaks that rule instead of
// shipping an entry the judge never sees.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

const OUTPUT_DIR = "/output";

// Create the output directory only when it is missing; the grader mounts it.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to ${OUTPUT_DIR}/entry.txt`);
