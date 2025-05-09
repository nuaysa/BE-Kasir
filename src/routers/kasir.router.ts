import { verifyAdmin, verifyToken } from "../middleware/verify";
import { KasirController } from "../controllers/kasir.controller";
import { Router } from "express";

export class KasirRouter {
  private kasirController: KasirController;
  private router: Router;

  constructor() {
    this.kasirController = new KasirController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.kasirController.getAllKasirController);
    this.router.get("/profile", verifyToken, this.kasirController.getPenggunaByIdController);
    this.router.patch("/edit/:id", verifyAdmin("Admin"), verifyToken, this.kasirController.editKasirController);
    this.router.patch("/delete/:id", verifyToken,verifyAdmin("Admin"), this.kasirController.editKasirController);
  }

  getRouter() {
    return this.router;
  }
}
