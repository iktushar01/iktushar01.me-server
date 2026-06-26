import { Router } from "express";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createActivitySchema,
  updateActivitySchema,
} from "../portfolio/portfolio.validation";
import { ActivityController } from "./activity.controller";

const router = Router();
const adminAuth = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);

router.get("/", ActivityController.getPublished);
router.get("/admin/all", adminAuth, ActivityController.getAllAdmin);
router.get("/admin/:slug", adminAuth, ActivityController.getBySlugAdmin);
router.post("/", adminAuth, validateRequest(createActivitySchema), ActivityController.create);
router.get("/:slug", ActivityController.getPublishedBySlug);
router.patch("/:slug", adminAuth, validateRequest(updateActivitySchema), ActivityController.update);
router.delete("/:slug", adminAuth, ActivityController.remove);

export const ActivityRoutes = router;
