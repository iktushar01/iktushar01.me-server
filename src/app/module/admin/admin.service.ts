import { StatusCodes } from "http-status-codes";
import { BlogStatus, Role, UserStatus } from "../../lib/prisma-exports";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { IRequestUser } from "../auth/auth.interface";
import { IUpdateAdminPayload } from "./admin.interface";

const adminPublicSelect = {
    id: true,
    name: true,
    email: true,
    profilePhoto: true,
    contactNumber: true,
    isDeleted: true,
    deletedAt: true,
    userId: true,
    createdAt: true,
    updatedAt: true,
    user: {
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            status: true,
            emailVerified: true,
            image: true,
            isDeleted: true,
            createdAt: true,
            updatedAt: true,
        },
    },
} as const;

const assertSuperAdminRequester = (requestingUser: IRequestUser) => {
    if (requestingUser.role !== Role.SUPER_ADMIN) {
        throw new AppError(
            StatusCodes.FORBIDDEN,
            "Only Super Admin can manage admin accounts",
        );
    }
};

const getAdminRecordOrThrow = async (id: string) => {
    const admin = await prisma.admin.findUnique({
        where: { id },
        select: {
            id: true,
            userId: true,
            isDeleted: true,
            user: {
                select: {
                    id: true,
                    role: true,
                    isDeleted: true,
                },
            },
        },
    });

    if (!admin || admin.isDeleted || admin.user.isDeleted) {
        throw new AppError(StatusCodes.NOT_FOUND, "Admin not found");
    }

    return admin;
};

const assertTargetCanBeManaged = (
    targetRole: Role,
    action: "update" | "delete",
) => {
    if (targetRole === Role.SUPER_ADMIN) {
        throw new AppError(
            StatusCodes.FORBIDDEN,
            action === "delete"
                ? "Super Admin accounts cannot be deleted"
                : "Super Admin accounts cannot be updated from this endpoint",
        );
    }
};

const getAllAdmins = async (requestingUser: IRequestUser) => {
    assertSuperAdminRequester(requestingUser);

    const admins = await prisma.admin.findMany({
        where: {
            isDeleted: false,
            user: {
                isDeleted: false,
            },
        },
        select: adminPublicSelect,
        orderBy: {
            createdAt: "desc",
        },
    });

    return admins;
};

const getDashboardStats = async (requestingUser: IRequestUser) => {
    if (
        requestingUser.role !== Role.ADMIN &&
        requestingUser.role !== Role.SUPER_ADMIN
    ) {
        throw new AppError(
            StatusCodes.FORBIDDEN,
            "Only Admin or Super Admin can access dashboard stats",
        );
    }

    const roleScope: "ADMIN" | "SUPER_ADMIN" =
        requestingUser.role === Role.SUPER_ADMIN ? "SUPER_ADMIN" : "ADMIN";

    const [
        totalAdmins,
        totalSuperAdmins,
        totalProjects,
        publishedProjects,
        totalCertificates,
        totalActivities,
        totalBlogs,
        publishedBlogs,
        draftBlogs,
    ] = await Promise.all([
        prisma.admin.count({
            where: {
                isDeleted: false,
                user: { isDeleted: false, role: Role.ADMIN },
            },
        }),
        prisma.admin.count({
            where: {
                isDeleted: false,
                user: { isDeleted: false, role: Role.SUPER_ADMIN },
            },
        }),
        prisma.project.count({ where: { isDeleted: false } }),
        prisma.project.count({ where: { isDeleted: false, isPublished: true } }),
        prisma.certificate.count({ where: { isDeleted: false } }),
        prisma.activity.count({ where: { isDeleted: false } }),
        prisma.blogPost.count({ where: { isDeleted: false } }),
        prisma.blogPost.count({
            where: { isDeleted: false, status: BlogStatus.PUBLISHED },
        }),
        prisma.blogPost.count({
            where: { isDeleted: false, status: BlogStatus.DRAFT },
        }),
    ]);

    return {
        roleScope,
        adminSummary: {
            totalAdmins,
            totalSuperAdmins,
            totalAdminAccounts: totalAdmins + totalSuperAdmins,
        },
        portfolioSummary: {
            projects: { total: totalProjects, published: publishedProjects },
            certificates: totalCertificates,
            activities: totalActivities,
            blogs: {
                total: totalBlogs,
                published: publishedBlogs,
                drafts: draftBlogs,
            },
        },
    };
};

const getAdminById = async (id: string, requestingUser: IRequestUser) => {
    assertSuperAdminRequester(requestingUser);

    const admin = await prisma.admin.findFirst({
        where: {
            id,
            isDeleted: false,
            user: {
                isDeleted: false,
            },
        },
        select: adminPublicSelect,
    });

    if (!admin) {
        throw new AppError(StatusCodes.NOT_FOUND, "Admin not found");
    }

    return admin;
};

const updateAdmin = async (
    id: string,
    payload: IUpdateAdminPayload,
    requestingUser: IRequestUser,
) => {
    assertSuperAdminRequester(requestingUser);

    const adminRecord = await getAdminRecordOrThrow(id);
    assertTargetCanBeManaged(adminRecord.user.role, "update");

    const { admin } = payload;

    if (!admin || Object.keys(admin).length === 0) {
        throw new AppError(StatusCodes.BAD_REQUEST, "No admin fields provided for update");
    }

    const updatedAdmin = await prisma.admin.update({
        where: {
            id,
        },
        data: {
            ...admin,
        },
        select: adminPublicSelect,
    });

    return updatedAdmin;
};

const deleteAdmin = async (id: string, requestingUser: IRequestUser) => {
    assertSuperAdminRequester(requestingUser);

    const adminRecord = await getAdminRecordOrThrow(id);
    assertTargetCanBeManaged(adminRecord.user.role, "delete");

    if (adminRecord.userId === requestingUser.userId) {
        throw new AppError(StatusCodes.BAD_REQUEST, "You cannot delete yourself");
    }

    const result = await prisma.$transaction(async (tx) => {
        await tx.admin.update({
            where: { id },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
        });

        await tx.user.update({
            where: { id: adminRecord.userId },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
                status: UserStatus.DELETED,
            },
        });

        await tx.session.deleteMany({
            where: { userId: adminRecord.userId },
        });

        await tx.account.deleteMany({
            where: { userId: adminRecord.userId },
        });

        const admin = await tx.admin.findUnique({
            where: { id },
            select: adminPublicSelect,
        });

        return admin;
    });

    return result;
};

export const AdminService = {
    getDashboardStats,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
};
