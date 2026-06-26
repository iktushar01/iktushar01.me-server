import express from "express";
import { ActivityRoutes } from "../module/activity/activity.route";
import { AdminRoutes } from "../module/admin/admin.route";
import { AuthRoute } from "../module/auth/auth.route";
import { BlogRoutes } from "../module/blog/blog.route";
import { CertificateRoutes } from "../module/certificate/certificate.route";
import { ProjectRoutes } from "../module/project/project.route";
import { UploadRoutes } from "../module/upload/upload.route";
import { UserRoutes } from "../module/user/user.route";

const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/users", UserRoutes);
router.use("/admins", AdminRoutes);
router.use("/projects", ProjectRoutes);
router.use("/certificates", CertificateRoutes);
router.use("/activities", ActivityRoutes);
router.use("/blogs", BlogRoutes);
router.use("/upload", UploadRoutes);

export const IndexRoute = router;
