import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
if (process.platform !== "win32") {
  execSync("chmod +x dist/index.js", { cwd: dir, shell: true });
}
