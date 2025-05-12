"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const verify_1 = require("../middleware/verify");
const category_controller_1 = require("../controllers/category.controller");
const express_1 = require("express");
class CategoryRouter {
    constructor() {
        this.categoryController = new category_controller_1.CategoryController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.categoryController.createCategoryController);
        this.router.get("/", verify_1.verifyToken, this.categoryController.getCategoryController);
        this.router.patch("/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.categoryController.editCategoryController);
        this.router.patch("/delete/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.categoryController.deleteCategoryController);
    }
    getRouter() {
        return this.router;
    }
}
exports.CategoryRouter = CategoryRouter;
