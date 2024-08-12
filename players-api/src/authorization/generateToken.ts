import jwt, { SignOptions } from "jsonwebtoken";
import { JwtUser } from "../account/users";

export const SECRET_KEY = "mySecretKey";

//This whole thing would be done in another server somewhere
export const generateToken = (payload: JwtUser) => {
  console.log("token generated:", payload);

  const options: SignOptions = {
    expiresIn: "4h",
  };

  return jwt.sign(payload, SECRET_KEY, options);
};
