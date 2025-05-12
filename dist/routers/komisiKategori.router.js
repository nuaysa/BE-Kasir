"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KomisiKategoriRouter = void 0;
const verify_1 = require("../middleware/verify");
const komisiKategori_controller_1 = require("../controllers/komisiKategori.controller");
const express_1 = require("express");
class KomisiKategoriRouter {
    constructor() {
        this.komisiKategoriController = new komisiKategori_controller_1.komisiKategoriController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.komisiKategoriController.createKomisiKategoriController);
        this.router.get("/", verify_1.verifyToken, (0, verify_1.verifyAdmin)("Admin"), this.komisiKategoriController.getKomisiKategoriController);
    }
    getRouter() {
        return this.router;
    }
}
exports.KomisiKategoriRouter = KomisiKategoriRouter;
