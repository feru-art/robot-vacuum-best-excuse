import { mkdirSync, writeFileSync } from "node:fs";

// V1 — cliff sensor vs black rug: the vacuum heroically refuses a cliff that isn't there.
const TEXT =
  "My cliff sensor classified your black rug as a sheer drop, so I heroically refused to drive off a cliff that isn't there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
