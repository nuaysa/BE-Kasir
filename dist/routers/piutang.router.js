"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiutangRouter = void 0;
const verify_1 = require("../middleware/verify");
const piutang_controller_1 = require("../controllers/piutang.controller");
const express_1 = require("express");
class PiutangRouter {
    constructor() {
        this.piutangController = new piutang_controller_1.PiutangController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.piutangController.getAllPiutangController);
    }
    getRouter() {
        return this.router;
    }
}
exports.PiutangRouter = PiutangRouter;
