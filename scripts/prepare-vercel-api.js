import fs from "fs";
import path from "path";

const apiDistDir = path.join("api", "_dist");
const templatesSource = path.join("src", "app", "templates");
const templatesTarget = path.join(apiDistDir, "app", "templates");

if (!fs.existsSync("dist")) {
  throw new Error("Build output missing: run tsc before prepare-vercel-api");
}

fs.rmSync(apiDistDir, { recursive: true, force: true });
fs.cpSync("dist", apiDistDir, { recursive: true });

if (fs.existsSync(templatesSource)) {
  fs.mkdirSync(path.dirname(templatesTarget), { recursive: true });
  fs.cpSync(templatesSource, templatesTarget, { recursive: true });
}

const prismaClient = path.join(apiDistDir, "generated", "prisma", "index.js");
if (!fs.existsSync(prismaClient)) {
  throw new Error(`Prisma client missing at ${prismaClient}`);
}

console.log(`Prepared Vercel API bundle at ${apiDistDir}`);
