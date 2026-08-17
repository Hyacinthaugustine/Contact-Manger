import { Request, Response, NextFunction } from "express";
import asyncErrorHandler from "./asyncErrorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";

const validateUsers = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get("Authorization");

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];

      const accessTokenSecret = process.env.ACCESS_TOKEN_SECERT;
      if (!accessTokenSecret) {
        res.status(500);
        throw new Error("Server misconfiguration: missing token secret");
      }

      jwt.verify(
        token,
        accessTokenSecret,
        (
          err: jwt.VerifyErrors | null,
          decoded: JwtPayload | string | undefined,
        ) => {
          if (err) {
            res.status(401);
            throw new Error("User not authorized");
          }

          if (
            typeof decoded === "object" &&
            decoded !== null &&
            (decoded as any).user
          ) {
            (req as any).user = (decoded as any).user;
          }

          next();
        },
      );

      if (!token) {
        res.status(401);
        throw new Error("User is not authorized  or missing token");
      }
    } else {
      res.status(401);
      throw new Error("Authorization header missing or malformed");
    }
  },
);

export default validateUsers;
