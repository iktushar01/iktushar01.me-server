import { Router } from "express";
import { memoryUpload } from "../../../config/multer.config";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { UploadController } from "./upload.controller";

const router = Router();

router.post(
  "/image",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  memoryUpload.single("file"),
  UploadController.uploadImage
);

export const UploadRoutes = router;
