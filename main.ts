import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I dropped the production database thinking it was staging — 14,000 users locked out, no backup, and the only restore plan is this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
