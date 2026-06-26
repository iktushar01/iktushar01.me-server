import { Router } from "express";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createProjectSchema,
  reorderSchema,
  updateProjectSchema,
} from "../portfolio/portfolio.validation";
import { ProjectController } from "./project.controller";

const router = Router();
const adminAuth = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);

router.get("/", ProjectController.getPublished);
router.get("/admin/all", adminAuth, ProjectController.getAllAdmin);
router.patch("/admin/reorder", adminAuth, validateRequest(reorderSchema), ProjectController.reorder);
router.get("/admin/:id", adminAuth, ProjectController.getByIdAdmin);
router.post("/", adminAuth, validateRequest(createProjectSchema), ProjectController.create);
router.get("/:id", ProjectController.getPublishedById);
router.patch("/:id", adminAuth, validateRequest(updateProjectSchema), ProjectController.update);
router.delete("/:id", adminAuth, ProjectController.remove);

export const ProjectRoutes = router;
