import { Express } from "express";
import md5 from "crypto-js/md5";
import { users } from "./users";
import { StatusCodes } from "http-status-codes";
import { generateToken } from "../authorization/generateToken";

type LoginUserBody = {
  email: string;
  password: string;
};

type LoginUserResponse = {
  success: boolean;
  message: string;
  token?: string;
};

export const addLoginEnpoint = (app: Express) => {
  app.post<{}, LoginUserResponse, LoginUserBody>(
    "/accounts/login",
    async (req, res) => {
      const { email: requestEmail, password } = req.body as LoginUserBody;

      const matchingUser = users.find(
        (user) =>
          user.email === requestEmail &&
          md5(password).toString() === user.md5Password
      );

      if (matchingUser === undefined) {
        return res.status(StatusCodes.FORBIDDEN).json({
          success: false,
          message: "Invalid username or password",
        });
      }
      const { access, id, name, email } = matchingUser;
      res.json({
        success: true,
        message: "Authentication Successful",
        token: generateToken({ access, id, name, email }),
      });
    }
  );
};
