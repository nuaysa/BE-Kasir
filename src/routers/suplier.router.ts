import { verifyAdmin, verifyToken } from "../middleware/verify";
import { SuplierController } from "../controllers/suplier.controler";
import { Router } from "express";

export class SuplierRouter {
  private suplierController: SuplierController;
  private router: Router;

  constructor() {
    this.suplierController = new SuplierController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, verifyAdmin("Admin"), this.suplierController.getSuplierController);
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.suplierController.createSuplierController);
    this.router.patch("/:id", verifyToken, verifyAdmin("Admin"), this.suplierController.editSuplierController);
  }

  getRouter() {
    return this.router;
  }
}
