import "dotenv/config";
import { seedPortfolio } from "./seed-portfolio";

seedPortfolio()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
