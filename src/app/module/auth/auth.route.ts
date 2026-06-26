import { Router } from "express";
import { Role } from "../../lib/prisma-exports";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { memoryUpload } from "../../../config/multer.config";
import { AuthController } from "./auth.controller";
import { 
    registerStudentZodSchema,
    loginZodSchema,
 changePasswordZodSchema,
    updateProfileZodSchema,
 } from "./auth.validation";



const router = Router();

// ─── Public routes ────────────────────────────────────────────────────────────

router.post(
    "/register",
    memoryUpload.single("image"),
    validateRequest(registerStudentZodSchema),
    AuthController.registerStudent,
);

router.post(
    "/login",
    validateRequest(loginZodSchema),
    AuthController.loginUser,
);

router.post("/refresh-token", AuthController.getNewTokens);

// ─── Authenticated routes (all roles) ────────────────────────────────────────

const allRoles = [Role.STUDENT, Role.ADMIN, Role.SUPER_ADMIN] as const;

router.get("/me", checkAuth(...allRoles), AuthController.getMe);

router.patch(
    "/me",
    checkAuth(...allRoles),
    memoryUpload.single("image"),
    validateRequest(updateProfileZodSchema),
    AuthController.updateProfile,
);

router.post(
    "/change-password",
    checkAuth(...allRoles),
    validateRequest(changePasswordZodSchema),
    AuthController.changePassword,
);

router.post("/logout", checkAuth(...allRoles), AuthController.logoutUser);

export const AuthRoute = router;
