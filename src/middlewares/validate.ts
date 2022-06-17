import { Response, Request, NextFunction } from "express";
import { AnyZodObject, ZodSchema } from "zod";

export const ValidateSchems =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body, query, params } = req;

    schema.parse({
      body,
      query,
      params,
    });
    next();
  };
