import { Express } from "express";
import { addLoginEnpoint } from "./account-login";
import {
  UserRequest,
  getValidateTokenMiddleware,
} from "../authorization/validateToken";
import { Transaction, transactions } from "./transactions";

export const addAccountsEndpoints = (app: Express) => {
  addLoginEnpoint(app);
  app.get<{}, Transaction[]>(
    "/accounts/transactions",
    getValidateTokenMiddleware("User"),
    async (req, res) => {
      const { id } = (req as UserRequest).user!;
      res.send(transactions[id] ?? []);
    }
  );

  app.get<{}, string>(
    "/accounts/admin",
    getValidateTokenMiddleware("Admin"),
    async (req, res) => {
      res.send("The secret word is 'umbrella'");
    }
  );
};
