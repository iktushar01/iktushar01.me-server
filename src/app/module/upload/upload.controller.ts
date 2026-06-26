import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { uploadFileToCloudinary } from "../../../config/cloudinary.config";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const uploadImage = catchAsync(async (req: Request, res: Response) => {
  const file = (req as any).file;

  if (!file?.buffer || !file?.originalname) {
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "No file uploaded",
    });
    return;
  }

  const result = await uploadFileToCloudinary(file.buffer, file.originalname);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Image uploaded successfully",
    data: {
      url: result.secure_url,
      publicId: result.public_id,
    },
  });
});

export const UploadController = {
  uploadImage,
};
