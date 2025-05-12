"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KasirRouter = void 0;
const verify_1 = require("../middleware/verify");
const kasir_controller_1 = require("../controllers/kasir.controller");
const express_1 = require("express");
class KasirRouter {
    constructor() {
        this.kasirController = new kasir_controller_1.KasirController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, this.kasirController.getAllKasirController);
        this.router.get("/profile", verify_1.verifyToken, this.kasirController.getPenggunaByIdController);
        this.router.patch("/edit/:id", (0, verify_1.verifyAdmin)("Admin"), verify_1.verifyToken, this.kasirController.editKasirController);
        this.router.patch("/delete/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.kasirController.editKasirController);
    }
    getRouter() {
        return this.router;
    }
}
exports.KasirRouter = KasirRouter;
