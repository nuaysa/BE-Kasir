"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenjualanRouter = void 0;
const verify_1 = require("../middleware/verify");
const penjualan_controller_1 = require("../controllers/penjualan.controller");
const express_1 = require("express");
class PenjualanRouter {
    constructor() {
        this.penjualanController = new penjualan_controller_1.PenjualanController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, this.penjualanController.createPenjualanController);
        this.router.get("/", verify_1.verifyToken, this.penjualanController.getAllpenjualanControler);
        this.router.get("/kasir", verify_1.verifyToken, this.penjualanController.getKasirPenjualan);
        this.router.get("/:id", verify_1.verifyToken, this.penjualanController.getPenjualanById);
        this.router.post("/email/:id", verify_1.verifyToken, this.penjualanController.sendEmailController);
    }
    getRouter() {
        return this.router;
    }
}
exports.PenjualanRouter = PenjualanRouter;
