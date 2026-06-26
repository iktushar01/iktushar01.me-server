declare module "../dist/app.js" {
  import type { Application } from "express";
  const app: Application;
  export default app;
}

declare module "../dist/app/utils/seed.js" {
  export function seedSuperAdmin(): Promise<void>;
}

declare module "../dist/app/utils/seed-portfolio.js" {
  export function seedPortfolio(): Promise<void>;
}
