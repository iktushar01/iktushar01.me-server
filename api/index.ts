/**
 * Vercel serverless entry — all HTTP traffic is rewritten here.
 * Requires `npm run build` so `dist/app.js` exists before deploy.
 */
import app from "../dist/app.js";

export default app;
