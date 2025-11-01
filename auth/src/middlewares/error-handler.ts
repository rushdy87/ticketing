import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res
    .status(500)
    .send({ errors: [{ message: err.message || "Internal Server Error" }] });
};
