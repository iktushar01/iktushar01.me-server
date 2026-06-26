import { Router } from "express";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createCertificateSchema,
  reorderSchema,
  updateCertificateSchema,
} from "../portfolio/portfolio.validation";
import { CertificateController } from "./certificate.controller";

const router = Router();
const adminAuth = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);

router.get("/", CertificateController.getPublished);
router.get("/admin/all", adminAuth, CertificateController.getAllAdmin);
router.patch("/admin/reorder", adminAuth, validateRequest(reorderSchema), CertificateController.reorder);
router.get("/admin/:id", adminAuth, CertificateController.getByIdAdmin);
router.post("/", adminAuth, validateRequest(createCertificateSchema), CertificateController.create);
router.get("/:id", CertificateController.getPublishedById);
router.patch("/:id", adminAuth, validateRequest(updateCertificateSchema), CertificateController.update);
router.delete("/:id", adminAuth, CertificateController.remove);

export const CertificateRoutes = router;
