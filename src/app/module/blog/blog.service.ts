import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { BlogStatus } from "../../lib/prisma-exports";
import { QueryBuilder } from "../../utils/QueryBuilder";
import {
  blogPublishedWhere,
  estimateReadingTime,
  slugify,
  asQueryModel,
} from "../portfolio/portfolio.helpers";

export const BlogService = {
  async getPublished(query: Record<string, unknown>) {
    const limit = query.limit ? Number(query.limit) : undefined;
    const featured = query.featured === "true";

    if (limit && !query.page) {
      const posts = await prisma.blogPost.findMany({
        where: {
          ...blogPublishedWhere,
          ...(featured ? { featured: true } : {}),
        },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: limit,
      });

      return {
        data: posts.map(BlogService.toPublicDTO),
        meta: { page: 1, limit, total: posts.length, totalPages: 1 },
      };
    }

    const result = await new QueryBuilder(asQueryModel(prisma.blogPost), query, {
      searchableFields: ["title", "excerpt", "category", "author"],
      filterableFields: ["category", "featured", "status"],
    })
      .where(blogPublishedWhere)
      .sort()
      .paginate()
      .execute();

    return {
      data: result.data.map((post) => BlogService.toPublicDTO(post as Parameters<typeof BlogService.toPublicDTO>[0])),
      meta: result.meta,
    };
  },

  async getPublishedBySlug(slug: string) {
    const post = await prisma.blogPost.findFirst({
      where: { slug, ...blogPublishedWhere },
    });

    if (!post) {
      throw new AppError(StatusCodes.NOT_FOUND, "Blog post not found");
    }

    return BlogService.toPublicDTO(post);
  },

  async getAllAdmin(query: Record<string, unknown>) {
    const result = await new QueryBuilder(asQueryModel(prisma.blogPost), query, {
      searchableFields: ["title", "slug", "category", "author"],
      filterableFields: ["status", "category", "featured"],
    })
      .where({ isDeleted: false })
      .sort()
      .paginate()
      .execute();

    return {
      data: result.data.map((post) => BlogService.toAdminDTO(post as Parameters<typeof BlogService.toAdminDTO>[0])),
      meta: result.meta,
    };
  },

  async getByIdAdmin(id: string) {
    const post = await prisma.blogPost.findFirst({
      where: { id, isDeleted: false },
    });

    if (!post) {
      throw new AppError(StatusCodes.NOT_FOUND, "Blog post not found");
    }

    return BlogService.toAdminDTO(post);
  },

  async create(data: Record<string, unknown>) {
    const slug = (data.slug as string) || slugify(data.title as string);
    const existing = await prisma.blogPost.findUnique({ where: { slug } });

    if (existing) {
      throw new AppError(StatusCodes.CONFLICT, "Blog slug already exists");
    }

    const status = (data.status as BlogStatus) || BlogStatus.DRAFT;
    const content = data.content as string;
    const readingTime =
      (data.readingTime as number) || estimateReadingTime(content);

    return prisma.blogPost.create({
      data: {
        title: data.title as string,
        slug,
        excerpt: data.excerpt as string,
        content,
        coverImage: data.coverImage as string,
        category: data.category as string,
        tags: (data.tags as string[]) || [],
        readingTime,
        featured: (data.featured as boolean) ?? false,
        author: data.author as string,
        status,
        publishedAt:
          status === BlogStatus.PUBLISHED
            ? data.publishedAt
              ? new Date(data.publishedAt as string)
              : new Date()
            : null,
      },
    });
  },

  async update(id: string, data: Record<string, unknown>) {
    const existing = await BlogService.getByIdAdmin(id);

    if (data.slug && data.slug !== existing.slug) {
      const slugTaken = await prisma.blogPost.findUnique({
        where: { slug: data.slug as string },
      });
      if (slugTaken) {
        throw new AppError(StatusCodes.CONFLICT, "Blog slug already exists");
      }
    }

    const content = data.content as string | undefined;
    const status = data.status as BlogStatus | undefined;
    const updateData: Record<string, unknown> = { ...data };

    if (content) {
      updateData.readingTime =
        (data.readingTime as number) || estimateReadingTime(content);
    }

    if (status === BlogStatus.PUBLISHED && !existing.publishedAt) {
      updateData.publishedAt = data.publishedAt
        ? new Date(data.publishedAt as string)
        : new Date();
    }

    if (status === BlogStatus.DRAFT) {
      updateData.publishedAt = null;
    }

    if (data.publishedAt) {
      updateData.publishedAt = new Date(data.publishedAt as string);
    }

    const updated = await prisma.blogPost.update({
      where: { id },
      data: updateData as any,
    });

    return BlogService.toAdminDTO(updated);
  },

  async softDelete(id: string) {
    await BlogService.getByIdAdmin(id);

    return prisma.blogPost.update({
      where: { id },
      data: { isDeleted: true },
    });
  },

  toPublicDTO(post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    tags: string[];
    publishedAt: Date | null;
    readingTime: number;
    featured: boolean;
    author: string;
  }) {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      category: post.category,
      tags: post.tags,
      publishedAt: post.publishedAt?.toISOString().split("T")[0] ?? "",
      readingTime: post.readingTime,
      featured: post.featured,
      author: post.author,
    };
  },

  toAdminDTO(post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    tags: string[];
    publishedAt: Date | null;
    readingTime: number;
    featured: boolean;
    author: string;
    status: BlogStatus;
    createdAt: Date;
    updatedAt: Date;
  }) {
    return {
      ...BlogService.toPublicDTO(post),
      status: post.status,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };
  },
};
