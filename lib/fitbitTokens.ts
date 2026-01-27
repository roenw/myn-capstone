// lib/fitbitTokens.ts

import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "fitbit_tokens.json");

export function saveTokens(tokens: any) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tokens, null, 2), "utf8");
}

export function loadTokens() {
  if (!fs.existsSync(FILE_PATH)) return null;
  const data = fs.readFileSync(FILE_PATH, "utf8");
  return JSON.parse(data);
}
