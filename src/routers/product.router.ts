import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";
import { verifyAdmin, verifyToken } from "../middleware/verify";

export class ProductsRouter {
  private productsController: ProductsController;
  private router: Router;

  constructor() {
    this.productsController = new ProductsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.productsController.getAllProductsController);
    this.router.post("/", verifyToken, verifyAdmin("Admin"), this.productsController.createProduct);
    this.router.get("/:id", verifyToken, this.productsController.getProductById);
    this.router.patch("/:id", verifyToken, verifyAdmin("Admin"), this.productsController.editProductController);
    this.router.patch("/delete/:id", verifyToken, verifyAdmin("Admin"), this.productsController.deleteProductController);
  }

  getRouter() {
    return this.router;
  }
}
