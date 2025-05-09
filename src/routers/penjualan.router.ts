import { verifyAdmin, verifyToken } from "../middleware/verify";
import { PenjualanController } from "../controllers/penjualan.controller";
import { Router } from "express";

export class PenjualanRouter {
  private penjualanController: PenjualanController;
  private router: Router;

  constructor() {
    this.penjualanController = new PenjualanController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", verifyToken, this.penjualanController.createPenjualanController);
    this.router.get("/", verifyToken, this.penjualanController.getAllpenjualanControler);
    this.router.get("/kasir", verifyToken, this.penjualanController.getKasirPenjualan);
    this.router.get("/:id", verifyToken, this.penjualanController.getPenjualanById);
    this.router.post("/email/:id", verifyToken, this.penjualanController.sendEmailController);
  }

  getRouter() {
    return this.router;
  }
}
