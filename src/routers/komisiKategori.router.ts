import { verifyAdmin, verifyToken } from "../middleware/verify";
import { komisiKategoriController } from "../controllers/komisiKategori.controller";
import { Router } from "express";

export class KomisiKategoriRouter {
  private komisiKategoriController: komisiKategoriController;
  private router: Router;

  constructor() {
    this.komisiKategoriController = new komisiKategoriController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.komisiKategoriController.createKomisiKategoriController);
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.komisiKategoriController.getKomisiKategoriController);
  }

  getRouter() {
    return this.router;
  }
}
