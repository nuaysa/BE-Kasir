import { NextFunction, Request, Response } from "express";
import { registerService } from "../services/auth/register.service";
import { loginService } from "../services/auth/login.service";
import { verifyService } from "../services/auth/verify.service";

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      return registerService(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      return loginService(req, res);
    } catch (error) {
      next(error);
    }
  }
  
  async verifyController(req: Request, res: Response, next: NextFunction) {
    try {
      return verifyService(req, res);
    } catch (error) {
      next(error);
    }
  }
}
