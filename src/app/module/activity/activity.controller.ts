import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { ActivityService } from "./activity.service";

const getPublished = catchAsync(async (req: Request, res: Response) => {
  const result = await ActivityService.getPublished(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activities fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getPublishedBySlug = catchAsync(async (req: Request, res: Response) => {
  const activity = await ActivityService.getPublishedBySlug(req.params.slug as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activity fetched successfully",
    data: activity,
  });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await ActivityService.getAllAdmin(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activities fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getBySlugAdmin = catchAsync(async (req: Request, res: Response) => {
  const activity = await ActivityService.getBySlugAdmin(req.params.slug as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activity fetched successfully",
    data: activity,
  });
});

const create = catchAsync(async (req: Request, res: Response) => {
  const activity = await ActivityService.create(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Activity created successfully",
    data: activity,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const activity = await ActivityService.update(req.params.slug as string, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activity updated successfully",
    data: activity,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  const activity = await ActivityService.softDelete(req.params.slug as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Activity deleted successfully",
    data: activity,
  });
});

export const ActivityController = {
  getPublished,
  getPublishedBySlug,
  getAllAdmin,
  getBySlugAdmin,
  create,
  update,
  remove,
};
