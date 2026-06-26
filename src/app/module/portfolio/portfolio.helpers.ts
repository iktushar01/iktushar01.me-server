import { BlogStatus, Role } from "../../lib/prisma-exports";
import { PrismaModelDelegate } from "../../interfaces/query.interface";

export const asQueryModel = (model: unknown) => model as PrismaModelDelegate;

export const adminRoles = [Role.ADMIN, Role.SUPER_ADMIN] as const;

export const publishedWhere = {
  isDeleted: false,
  isPublished: true,
};

export const blogPublishedWhere = {
  isDeleted: false,
  status: BlogStatus.PUBLISHED,
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
