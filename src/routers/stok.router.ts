import { verifyAdmin, verifyToken } from "../middleware/verify";
import { StokController } from "../controllers/stok.controller";
import { Router } from "express";

export class StokRouter {
  private stokController: StokController;
  private router: Router;

  constructor() {
    this.stokController = new StokController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.stokController.createStokController);
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.stokController.getAllStockController);
    this.router.patch("/", verifyToken, this.stokController.editStockController);
  }

  getRouter() {
    return this.router;
  }
}
