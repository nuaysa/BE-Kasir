"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PembelianRouter = void 0;
const verify_1 = require("../middleware/verify");
const pembelian_controller_1 = require("../controllers/pembelian.controller");
const express_1 = require("express");
class PembelianRouter {
    constructor() {
        this.pembelianController = new pembelian_controller_1.PembelianController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.pembelianController.createPembelianController);
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.pembelianController.getAllPembelianController);
        this.router.patch("/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.pembelianController.editPembelianController);
        this.router.get("/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.pembelianController.getPembelianByIdController);
    }
    getRouter() {
        return this.router;
    }
}
exports.PembelianRouter = PembelianRouter;
