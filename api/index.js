/**
 * Vercel serverless entry.
 * Build step copies compiled output to api/_dist (see scripts/prepare-vercel-api.js).
 */
import app from "./_dist/server.js";

export default app;
