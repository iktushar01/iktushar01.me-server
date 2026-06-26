import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { CertificateService } from "./certificate.service";

const getPublished = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.getPublished(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificates fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getPublishedById = catchAsync(async (req: Request, res: Response) => {
  const certificate = await CertificateService.getPublishedById(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificate fetched successfully",
    data: certificate,
  });
});

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.getAllAdmin(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificates fetched successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getByIdAdmin = catchAsync(async (req: Request, res: Response) => {
  const certificate = await CertificateService.getByIdAdmin(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificate fetched successfully",
    data: certificate,
  });
});

const create = catchAsync(async (req: Request, res: Response) => {
  const certificate = await CertificateService.create(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Certificate created successfully",
    data: certificate,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const certificate = await CertificateService.update(req.params.id as string, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificate updated successfully",
    data: certificate,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  const certificate = await CertificateService.softDelete(req.params.id as string);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificate deleted successfully",
    data: certificate,
  });
});

const reorder = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.reorder(req.body.items);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Certificates reordered successfully",
    data: result,
  });
});

export const CertificateController = {
  getPublished,
  getPublishedById,
  getAllAdmin,
  getByIdAdmin,
  create,
  update,
  remove,
  reorder,
};
