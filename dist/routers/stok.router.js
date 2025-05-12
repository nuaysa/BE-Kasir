"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StokRouter = void 0;
const verify_1 = require("../middleware/verify");
const stok_controller_1 = require("../controllers/stok.controller");
const express_1 = require("express");
class StokRouter {
    constructor() {
        this.stokController = new stok_controller_1.StokController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.stokController.createStokController);
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.stokController.getAllStockController);
        this.router.patch("/", verify_1.verifyToken, this.stokController.editStockController);
    }
    getRouter() {
        return this.router;
    }
}
exports.StokRouter = StokRouter;
