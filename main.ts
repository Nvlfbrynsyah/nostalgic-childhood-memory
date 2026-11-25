// Competition: u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// Writes one childhood-memory sentence (no trailing newline) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The night before I turned seven, my father taped tinfoil over the window so the streetlamp would count as candles, and we sang as though the whole room were lit.";

// Output dir: MAKEFUN_OUTPUT_DIR when the harness sets it, else the default /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");
