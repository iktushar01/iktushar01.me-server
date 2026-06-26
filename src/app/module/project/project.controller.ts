import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { ProjectService } from "./project.service";

const getPublished = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getPublished(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getPublishedById = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.getPublishedById(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project fetched successfully",
    data: project,
  });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllAdmin(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getByIdAdmin = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.getByIdAdmin(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project fetched successfully",
    data: project,
  });
});

const create = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.create(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Project created successfully",
    data: project,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.update(req.params.id as string, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project updated successfully",
    data: project,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  const project = await ProjectService.softDelete(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project deleted successfully",
    data: project,
  });
});

const reorder = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.reorder(req.body.items);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Projects reordered successfully",
    data: result,
  });
});

export const ProjectController = {
  getPublished,
  getPublishedById,
  getAllAdmin,
  getByIdAdmin,
  create,
  update,
  remove,
  reorder,
};
