import fs from "fs";
import path from "path";

const apiDistDir = path.join("api", "_dist");
const templatesSource = path.join("src", "app", "templates");
const templatesTarget = path.join(apiDistDir, "app", "templates");

fs.rmSync(apiDistDir, { recursive: true, force: true });
fs.cpSync("dist", apiDistDir, { recursive: true });

if (fs.existsSync(templatesSource)) {
  fs.mkdirSync(path.dirname(templatesTarget), { recursive: true });
  fs.cpSync(templatesSource, templatesTarget, { recursive: true });
}

console.log(`Prepared Vercel API bundle at ${apiDistDir}`);
