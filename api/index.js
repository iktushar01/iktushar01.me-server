/**
 * Vercel serverless entry — all HTTP traffic is rewritten here.
 * Build copies compiled output to api/_dist (see scripts/prepare-vercel-api.js).
 */
import app from "./_dist/app.js";
import { seedSuperAdmin } from "./_dist/app/utils/seed.js";
import { seedPortfolio } from "./_dist/app/utils/seed-portfolio.js";

if (process.env.VERCEL === "1") {
  seedSuperAdmin().catch(() => {});
  seedPortfolio().catch(() => {});
}

export default function handler(req, res) {
  return app(req, res);
}
