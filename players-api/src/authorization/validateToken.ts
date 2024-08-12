import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./generateToken";
import { StatusCodes } from "http-status-codes";
import { JwtUserPayload, UserAccess } from "../account/users";

export type UserRequest = Request & {
  user?: JwtUserPayload;
};

export const getValidateTokenMiddleware = (minimumAccess: UserAccess) => {
  return async (req: UserRequest, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;

    const token = bearerToken?.match(/^Bearer\s(?<token>.*)$/)?.groups?.[
      "token"
    ];

    if (token === undefined) {
      res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Token is not provided",
      });
      return;
    }

    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      } else {
        const userPayload = payload as JwtUserPayload;
        if (!userPayload.access.includes(minimumAccess)) {
          return res.status(403).json({
            success: false,
            message: `Invalid use access level,required=${minimumAccess}`,
          });
        }
        req.user = userPayload;
        next();
      }
    });
  };
};

// Your custom "middleware" function:

const jwtVerify = async (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (err === null) {
        resolve(payload!?.toString());
      }
      reject(err);
    });
  });
};
