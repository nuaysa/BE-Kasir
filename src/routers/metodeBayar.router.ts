import { verifyAdmin, verifyToken } from "../middleware/verify";
import { MetodeBayarController } from "../controllers/metodeBayar.controller";
import { Router } from "express";

export class MetodeBayarRouter {
  private metodeBayarController: MetodeBayarController;
  private router: Router;

  constructor() {
    this.metodeBayarController = new MetodeBayarController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.metodeBayarController.createMetodeBayarController);
    this.router.get("/", verifyToken, this.metodeBayarController.getMetodeBayarController);
  }

  getRouter() {
    return this.router;
  }
}
