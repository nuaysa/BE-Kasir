import { Role } from "@prisma/client";
import "express";

export type UserPayload = {
  id: number;
  role: Role;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; 
    }
  }
};