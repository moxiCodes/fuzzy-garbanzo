import { JwtPayload } from "jsonwebtoken";

export type UserAccess = "User" | "Admin";

export type User = {
  id: number;
  name: string;
  email: string;
  md5Password: string;
  access: UserAccess[];
};

export type JwtUserPayload = JwtPayload & User;

export type JwtUser = Omit<User, "md5Password">;

// This would come from a Database in realy life,
// I encoded the password in MD5 because it would almost definitely be stored in the DB
// hashed like this (Probably with a stronger algorithm like SHA256)
export const users: User[] = [
  {
    id: 1,
    name: "Erica Edwards",
    email: "EricaCEdwards@jourrapide.com",
    md5Password: "0826b5c04738bedcc5ebc17dc643e103",
    access: ["User"],
  },
  {
    id: 2,
    name: "Miguel Bingham",
    email: "MiguelBBingham@rhyta.com",
    md5Password: "9eb0c9605dc81a68731f61b3e0838937",
    access: ["User"],
  },
  {
    id: 3,
    name: "Nora Poole",
    email: "NoraDPoole@dayrep.com",
    md5Password: "23f88ac14feead92f4fdf8e640507d3c",
    access: ["User", "Admin"],
  },
];
