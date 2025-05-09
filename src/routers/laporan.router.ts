import { verifyAdmin, verifyToken } from "../middleware/verify";
import { LaporanController } from "../controllers/laporan.controller";
import { Router } from "express";

export class LaporanRouter {
  private laporanController: LaporanController;
  private router: Router;

  constructor() {
    this.laporanController = new LaporanController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.laporanController.getAlllaporanController);
    this.router.get("/stat", verifyToken, this.laporanController.getStatController);
    this.router.get("/admin-stat", verifyToken, verifyAdmin("Admin"), this.laporanController.getAdminStatController);
    this.router.get("/chart", verifyToken, verifyAdmin("Admin"), this.laporanController.getChartController);
  }

  getRouter() {
    return this.router;
  }
}
