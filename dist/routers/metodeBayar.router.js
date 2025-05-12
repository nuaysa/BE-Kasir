"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodeBayarRouter = void 0;
const verify_1 = require("../middleware/verify");
const metodeBayar_controller_1 = require("../controllers/metodeBayar.controller");
const express_1 = require("express");
class MetodeBayarRouter {
    constructor() {
        this.metodeBayarController = new metodeBayar_controller_1.MetodeBayarController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.metodeBayarController.createMetodeBayarController);
        this.router.get("/", verify_1.verifyToken, this.metodeBayarController.getMetodeBayarController);
    }
    getRouter() {
        return this.router;
    }
}
exports.MetodeBayarRouter = MetodeBayarRouter;
