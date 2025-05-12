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
exports.PenjualanController = void 0;
const getAllPenjualan_service_1 = require("../services/penjualan/getAllPenjualan.service");
const createPenjualan_service_1 = require("../services/penjualan/createPenjualan.service");
const getPenjualanById_service_1 = require("../services/penjualan/getPenjualanById.service");
const sendEmail_service_1 = require("../services/penjualan/sendEmail.service");
const getPenjualanByUser_service_1 = require("../services/penjualan/getPenjualanByUser.service");
class PenjualanController {
    getAllpenjualanControler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
                const result = yield (0, getAllPenjualan_service_1.getAllPenjualanService)({
                    userId,
                    page: page ? Number(page) : undefined,
                    pageSize: pageSize ? Number(pageSize) : undefined,
                    sortBy: sortBy,
                    order: order,
                    filterBy: filterBy,
                    filterValue: filterValue,
                });
                res.status(200).json({
                    success: true,
                    data: result.data,
                    meta: result.meta,
                });
            }
            catch (err) {
                console.error("Error in getAllPenjualan:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    getPenjualanById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const penjualanId = req.params.id;
                const penjualan = yield (0, getPenjualanById_service_1.getPenjualanByIdService)({
                    userId: userId,
                    penjualanId: +penjualanId,
                });
                res.status(200).json({
                    success: true,
                    data: penjualan,
                });
            }
            catch (err) {
                console.error("Error in getAllPenjualan:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    getKasirPenjualan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const penjualan = yield (0, getPenjualanByUser_service_1.getPenjualanByUserService)({
                    userId: userId,
                });
                res.status(200).json({
                    success: true,
                    data: penjualan,
                });
            }
            catch (err) {
                console.error("Error in getAllPenjualan:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    createPenjualanController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const { metodeBayarId, items } = req.body;
                const result = yield (0, createPenjualan_service_1.createPenjualanService)({
                    kasirId: userId,
                    metodeBayarId,
                    items,
                });
                res.status(201).json({
                    success: true,
                    message: result.message,
                    penjualanId: result.penjualanId,
                    total: result.total,
                });
            }
            catch (err) {
                console.error("Error in createPenjualan:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    sendEmailController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { emailCustomer } = req.body;
                const { id } = req.params;
                yield (0, sendEmail_service_1.sendEmailService)({
                    penjualanId: Number(id),
                    emailCustomer,
                });
                res.status(200).json({ message: "Struk berhasil dikirim ke email!" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error instanceof Error ? error.message : "Gagal mengirim email" });
            }
        });
    }
}
exports.PenjualanController = PenjualanController;
