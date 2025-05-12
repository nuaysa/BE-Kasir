"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodeBayarController = void 0;
const createMetodeBayar_service_1 = require("../services/metode bayar/createMetodeBayar.service");
const getMetodeBayar_service_1 = require("../services/metode bayar/getMetodeBayar.service");
class MetodeBayarController {
    createMetodeBayarController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { namaMetode } = req.body;
                if (!namaMetode)
                    throw new Error("Nama metode tidak boleh kosong");
                const metode = yield (0, createMetodeBayar_service_1.createMetodeBayarService)({
                    namaMetode: namaMetode,
                });
                res.status(200).json({
                    success: true,
                    data: metode.data,
                });
            }
            catch (err) {
                console.error("Error in createMetodeBayarController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    getMetodeBayarController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const metode = yield (0, getMetodeBayar_service_1.getMetodeBayarService)();
                res.status(200).json({
                    success: true,
                    data: metode,
                });
            }
            catch (err) {
                console.error("Error in getMetodeBayarController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
}
exports.MetodeBayarController = MetodeBayarController;
