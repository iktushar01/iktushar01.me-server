import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { publishedWhere, asQueryModel } from "../portfolio/portfolio.helpers";

export const CertificateService = {
  async getPublished(query: Record<string, unknown>) {
    return new QueryBuilder(asQueryModel(prisma.certificate), query, {
      searchableFields: ["title", "issuer", "description"],
      filterableFields: ["isPublished"],
    })
      .where(publishedWhere)
      .sort()
      .paginate()
      .execute();
  },

  async getPublishedById(id: string) {
    const certificate = await prisma.certificate.findFirst({
      where: { id, ...publishedWhere },
    });

    if (!certificate) {
      throw new AppError(StatusCodes.NOT_FOUND, "Certificate not found");
    }

    return certificate;
  },

  async getAllAdmin(query: Record<string, unknown>) {
    return new QueryBuilder(asQueryModel(prisma.certificate), query, {
      searchableFields: ["title", "issuer"],
      filterableFields: ["isPublished"],
    })
      .where({ isDeleted: false })
      .sort()
      .paginate()
      .execute();
  },

  async getByIdAdmin(id: string) {
    const certificate = await prisma.certificate.findFirst({
      where: { id, isDeleted: false },
    });

    if (!certificate) {
      throw new AppError(StatusCodes.NOT_FOUND, "Certificate not found");
    }

    return certificate;
  },

  async create(data: Record<string, unknown>) {
    const maxOrder = await prisma.certificate.aggregate({
      _max: { sortOrder: true },
      where: { isDeleted: false },
    });

    return prisma.certificate.create({
      data: {
        ...(data as any),
        sortOrder: (data.sortOrder as number) ?? (maxOrder._max.sortOrder ?? 0) + 1,
      },
    });
  },

  async update(id: string, data: Record<string, unknown>) {
    await CertificateService.getByIdAdmin(id);

    return prisma.certificate.update({
      where: { id },
      data: data as any,
    });
  },

  async softDelete(id: string) {
    await CertificateService.getByIdAdmin(id);

    return prisma.certificate.update({
      where: { id },
      data: { isDeleted: true },
    });
  },

  async reorder(items: { id: string; sortOrder: number }[]) {
    await prisma.$transaction(
      items.map((item) =>
        prisma.certificate.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        })
      )
    );

    return { updated: items.length };
  },
};
