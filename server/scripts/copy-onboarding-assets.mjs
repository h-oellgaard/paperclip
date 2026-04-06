import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src", "onboarding-assets");
const dest = path.join(root, "dist", "onboarding-assets");
fs.cpSync(src, dest, { recursive: true });
