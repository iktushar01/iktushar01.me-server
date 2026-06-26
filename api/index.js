/**
 * Vercel serverless entry — all HTTP traffic is rewritten here.
 * Requires `npm run build` so `dist/app.js` exists before deploy.
 */
import app from "../dist/app.js";
import { seedSuperAdmin } from "../dist/app/utils/seed.js";
import { seedPortfolio } from "../dist/app/utils/seed-portfolio.js";

if (process.env.VERCEL === "1") {
  seedSuperAdmin().catch(() => {});
  seedPortfolio().catch(() => {});
}

export default app;
