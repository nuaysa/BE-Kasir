"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaporanRouter = void 0;
const verify_1 = require("../middleware/verify");
const laporan_controller_1 = require("../controllers/laporan.controller");
const express_1 = require("express");
class LaporanRouter {
    constructor() {
        this.laporanController = new laporan_controller_1.LaporanController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.laporanController.getAlllaporanController);
        this.router.get("/stat", verify_1.verifyToken, this.laporanController.getStatController);
        this.router.get("/admin-stat", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.laporanController.getAdminStatController);
        this.router.get("/chart", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.laporanController.getChartController);
    }
    getRouter() {
        return this.router;
    }
}
exports.LaporanRouter = LaporanRouter;
