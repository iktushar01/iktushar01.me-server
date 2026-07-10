import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { IQueryParams } from "../../interfaces/query.interface";
import { prisma } from "../../lib/prisma";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { publishedWhere, slugify, asQueryModel } from "../portfolio/portfolio.helpers";

export const ActivityService = {
  async getPublished(query: Record<string, unknown>) {
    const normalizedQuery: IQueryParams = {
      ...(query as IQueryParams),
      sortBy: typeof query.sortBy === "string" && query.sortBy.trim() ? query.sortBy : "sortOrder",
      sortOrder:
        typeof query.sortOrder === "string" &&
        (query.sortOrder === "asc" || query.sortOrder === "desc")
          ? query.sortOrder
          : "asc",
    };

    return new QueryBuilder(asQueryModel(prisma.activity), normalizedQuery, {
      searchableFields: ["title", "organizer", "shortDescription"],
      filterableFields: ["type", "isPublished"],
    })
      .where(publishedWhere)
      .sort()
      .paginate()
      .execute();
  },

  async getPublishedBySlug(slug: string) {
    const activity = await prisma.activity.findFirst({
      where: { slug, ...publishedWhere },
    });

    if (!activity) {
      throw new AppError(StatusCodes.NOT_FOUND, "Activity not found");
    }

    return activity;
  },

  async getAllAdmin(query: Record<string, unknown>) {
    const normalizedQuery: IQueryParams = {
      ...(query as IQueryParams),
      sortBy: typeof query.sortBy === "string" && query.sortBy.trim() ? query.sortBy : "sortOrder",
      sortOrder:
        typeof query.sortOrder === "string" &&
        (query.sortOrder === "asc" || query.sortOrder === "desc")
          ? query.sortOrder
          : "asc",
    };

    return new QueryBuilder(asQueryModel(prisma.activity), normalizedQuery, {
      searchableFields: ["title", "organizer", "slug"],
      filterableFields: ["type", "isPublished"],
    })
      .where({ isDeleted: false })
      .sort()
      .paginate()
      .execute();
  },

  async getBySlugAdmin(slug: string) {
    const activity = await prisma.activity.findFirst({
      where: { slug, isDeleted: false },
    });

    if (!activity) {
      throw new AppError(StatusCodes.NOT_FOUND, "Activity not found");
    }

    return activity;
  },

  async create(data: Record<string, unknown>) {
    const slug = (data.slug as string) || slugify(data.title as string);

    const existing = await prisma.activity.findUnique({ where: { slug } });
    if (existing) {
      throw new AppError(StatusCodes.CONFLICT, "Activity slug already exists");
    }

    const maxOrder = await prisma.activity.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false },
    });

    return prisma.activity.create({
      data: {
        ...(data as any),
        slug,
        sortOrder: (data.sortOrder as number) ?? (maxOrder._max.sortOrder ?? 0) + 1,
      },
    });
  },

  async update(slug: string, data: Record<string, unknown>) {
    await ActivityService.getBySlugAdmin(slug);

    if (data.slug && data.slug !== slug) {
      const existing = await prisma.activity.findUnique({
        where: { slug: data.slug as string },
      });
      if (existing) {
        throw new AppError(StatusCodes.CONFLICT, "Activity slug already exists");
      }
    }

    return prisma.activity.update({
      where: { slug },
      data: data as any,
    });
  },

  async softDelete(slug: string) {
    await ActivityService.getBySlugAdmin(slug);

    return prisma.activity.update({
      where: { slug },
      data: { isDeleted: true },
    });
  },
};
