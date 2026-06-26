import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { publishedWhere, asQueryModel } from "../portfolio/portfolio.helpers";

export const ProjectService = {
  async getPublished(query: Record<string, unknown>) {
    const result = await new QueryBuilder(asQueryModel(prisma.project), query, {
      searchableFields: ["title", "tag", "description"],
      filterableFields: ["isPublished"],
    })
      .where(publishedWhere)
      .sort()
      .paginate()
      .execute();

    return result;
  },

  async getPublishedById(id: string) {
    const project = await prisma.project.findFirst({
      where: { id, ...publishedWhere },
    });

    if (!project) {
      throw new AppError(StatusCodes.NOT_FOUND, "Project not found");
    }

    return project;
  },

  async getAllAdmin(query: Record<string, unknown>) {
    return new QueryBuilder(asQueryModel(prisma.project), query, {
      searchableFields: ["title", "tag"],
      filterableFields: ["isPublished"],
    })
      .where({ isDeleted: false })
      .sort()
      .paginate()
      .execute();
  },

  async getByIdAdmin(id: string) {
    const project = await prisma.project.findFirst({
      where: { id, isDeleted: false },
    });

    if (!project) {
      throw new AppError(StatusCodes.NOT_FOUND, "Project not found");
    }

    return project;
  },

  async create(data: Record<string, unknown>) {
    const maxOrder = await prisma.project.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false },
    });

    return prisma.project.create({
      data: {
        ...(data as any),
        sortOrder: (data.sortOrder as number) ?? (maxOrder._max.sortOrder ?? 0) + 1,
      },
    });
  },

  async update(id: string, data: Record<string, unknown>) {
    await ProjectService.getByIdAdmin(id);

    return prisma.project.update({
      where: { id },
      data: data as any,
    });
  },

  async softDelete(id: string) {
    await ProjectService.getByIdAdmin(id);

    return prisma.project.update({
      where: { id },
      data: { isDeleted: true },
    });
  },

  async reorder(items: { id: string; sortOrder: number }[]) {
    await prisma.$transaction(
      items.map((item) =>
        prisma.project.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        })
      )
    );

    return { updated: items.length };
  },
};
