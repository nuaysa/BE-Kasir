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
exports.PembelianController = void 0;
const createPembelian_service_1 = require("../services/pembelian/createPembelian.service");
const getPembelianById_service_1 = require("../services/pembelian/getPembelianById.service");
const editPembelian_service_1 = require("../services/pembelian/editPembelian.service");
const getAllPembelian_service_1 = require("../services/pembelian/getAllPembelian.service");
class PembelianController {
    createPembelianController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { suplierId, items, status, tanggalJatuhTempo } = req.body;
                if (!suplierId || !items || items.length === 0) {
                    throw { statusCode: 400, message: "Data supplier dan items harus diisi" };
                }
                const result = yield (0, createPembelian_service_1.createPembelianService)({
                    suplierId,
                    items: items.map((item) => ({
                        produkId: item.produkId,
                        qty: item.qty,
                        harga: item.harga,
                        expiredDate: item.expiredDate,
                        serialNumber: item.serialNumber,
                    })),
                    status,
                    tanggalJatuhTempo: tanggalJatuhTempo ? new Date(tanggalJatuhTempo) : undefined,
                });
                res.status(201).json({
                    success: true,
                    data: result,
                    message: "Pembelian berhasil dibuat",
                });
            }
            catch (err) {
                console.error("Error in createPembelianController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    editPembelianController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pembelianId = Number(req.params.id);
                const { statusPembelian, statusPiutang } = req.body;
                if (!pembelianId)
                    throw new Error("tentukan id pembelian yang ingin diubah");
                const pembelian = yield (0, editPembelian_service_1.editPembelianService)({
                    pembelianId: Number(pembelianId),
                    statusPembelian: statusPembelian,
                    statusPiutang: statusPiutang,
                });
                res.status(200).json({
                    success: true,
                    message: pembelian.message,
                    data: pembelian.data,
                });
            }
            catch (err) {
                console.error("Error in editPembelianController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    getPembelianByIdController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pembelianId = Number(req.params.id);
                if (!pembelianId)
                    throw new Error("tentukan id pembelian yang ingin ditampilkan");
                const pembelian = yield (0, getPembelianById_service_1.getPembelianByIdService)({
                    pembelianId: pembelianId,
                });
                res.status(200).json({
                    success: true,
                    message: pembelian.message,
                    data: pembelian.data,
                });
            }
            catch (err) {
                console.error("Error in getPembelianByIdController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
    getAllPembelianController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
                const pembelian = yield (0, getAllPembelian_service_1.getAllPembelianService)({
                    page: page,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    order: order,
                    filterBy: filterBy,
                    filterValue: filterValue,
                });
                res.status(200).json({
                    success: true,
                    data: pembelian,
                });
            }
            catch (err) {
                console.error("Error in getAllPembelianController:", err.message);
                res.status(err.statusCode || 500).json({
                    success: false,
                    message: err.message || "Terjadi kesalahan server",
                });
            }
        });
    }
}
exports.PembelianController = PembelianController;
