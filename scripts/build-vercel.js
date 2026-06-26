import fs from "fs";
import path from "path";
import * as esbuild from "esbuild";

const templatesDest = path.join("api", "templates");
const templatesSource = path.join("src", "app", "templates");
const prismaDest = path.join("api", "generated", "prisma");
const prismaSource = path.join("dist", "generated", "prisma");

if (!fs.existsSync("dist/server.js")) {
  throw new Error("Build output missing: run tsc before build-vercel");
}

if (!fs.existsSync(prismaSource)) {
  throw new Error(`Prisma client missing at ${prismaSource}`);
}

fs.rmSync(templatesDest, { recursive: true, force: true });
if (fs.existsSync(templatesSource)) {
  fs.cpSync(templatesSource, templatesDest, { recursive: true });
}

fs.rmSync(path.join("api", "generated"), { recursive: true, force: true });
fs.mkdirSync(path.dirname(prismaDest), { recursive: true });
fs.cpSync(prismaSource, prismaDest, { recursive: true });

fs.rmSync(path.join("api", "_dist"), { recursive: true, force: true });

await esbuild.build({
  entryPoints: ["dist/server.js"],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outfile: "api/index.js",
  packages: "external",
  plugins: [
    {
      name: "external-generated-prisma",
      setup(build) {
        build.onResolve({ filter: /[/\\]generated[/\\]prisma/ }, () => ({
          path: "./generated/prisma/index.js",
          external: true,
        }));
      },
    },
  ],
  logLevel: "info",
});

console.log("Built Vercel serverless bundle at api/index.js");
