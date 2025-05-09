import { verifyAdmin, verifyToken } from "../middleware/verify";
import { PiutangController } from "../controllers/piutang.controller";
import { Router } from "express";

export class PiutangRouter {
  private piutangController: PiutangController;
  private router: Router;

  constructor() {
    this.piutangController = new PiutangController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.piutangController.getAllPiutangController);
  }

  getRouter() {
    return this.router;
  }
}
