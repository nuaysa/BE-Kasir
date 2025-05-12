"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRouter = void 0;
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const verify_1 = require("../middleware/verify");
class ProductsRouter {
    constructor() {
        this.productsController = new products_controller_1.ProductsController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, this.productsController.getAllProductsController);
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.productsController.createProduct);
        this.router.get("/:id", verify_1.verifyToken, this.productsController.getProductById);
        this.router.patch("/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.productsController.editProductController);
        this.router.patch("/delete/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.productsController.deleteProductController);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProductsRouter = ProductsRouter;
