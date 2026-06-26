import { Router } from "express";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createBlogSchema,
  updateBlogSchema,
} from "../portfolio/portfolio.validation";
import { BlogController } from "./blog.controller";

const router = Router();
const adminAuth = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);

router.get("/", BlogController.getPublished);
router.get("/admin/all", adminAuth, BlogController.getAllAdmin);
router.get("/admin/:id", adminAuth, BlogController.getByIdAdmin);
router.post("/", adminAuth, validateRequest(createBlogSchema), BlogController.create);
router.get("/slug/:slug", BlogController.getPublishedBySlug);
router.patch("/:id", adminAuth, validateRequest(updateBlogSchema), BlogController.update);
router.delete("/:id", adminAuth, BlogController.remove);

export const BlogRoutes = router;
