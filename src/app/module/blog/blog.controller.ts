import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { BlogService } from "./blog.service";

const getPublished = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getPublished(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog posts fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getPublishedBySlug = catchAsync(async (req: Request, res: Response) => {
  const post = await BlogService.getPublishedBySlug(req.params.slug as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post fetched successfully",
    data: post,
  });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllAdmin(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog posts fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getByIdAdmin = catchAsync(async (req: Request, res: Response) => {
  const post = await BlogService.getByIdAdmin(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post fetched successfully",
    data: post,
  });
});

const create = catchAsync(async (req: Request, res: Response) => {
  const post = await BlogService.create(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Blog post created successfully",
    data: BlogService.toAdminDTO(post),
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const post = await BlogService.update(req.params.id as string, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post updated successfully",
    data: post,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  const post = await BlogService.softDelete(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blog post deleted successfully",
    data: post,
  });
});

export const BlogController = {
  getPublished,
  getPublishedBySlug,
  getAllAdmin,
  getByIdAdmin,
  create,
  update,
  remove,
};
