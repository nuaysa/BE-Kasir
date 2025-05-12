"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuplierRouter = void 0;
const verify_1 = require("../middleware/verify");
const suplier_controler_1 = require("../controllers/suplier.controler");
const express_1 = require("express");
class SuplierRouter {
    constructor() {
        this.suplierController = new suplier_controler_1.SuplierController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.suplierController.getSuplierController);
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.suplierController.createSuplierController);
        this.router.patch("/:id", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.suplierController.editSuplierController);
    }
    getRouter() {
        return this.router;
    }
}
exports.SuplierRouter = SuplierRouter;
