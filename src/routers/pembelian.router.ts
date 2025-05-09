import { verifyAdmin, verifyToken } from "../middleware/verify";
import { PembelianController } from "../controllers/pembelian.controller";
import { Router } from "express";

export class PembelianRouter {
  private pembelianController: PembelianController;
  private router: Router;

  constructor() {
    this.pembelianController = new PembelianController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.pembelianController.createPembelianController);
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.pembelianController.getAllPembelianController);
    this.router.patch("/:id", verifyToken, verifyAdmin("Admin"), this.pembelianController.editPembelianController);
    this.router.get("/:id", verifyToken, verifyAdmin("Admin"), this.pembelianController.getPembelianByIdController);
  }

  getRouter() {
    return this.router;
  }
}
