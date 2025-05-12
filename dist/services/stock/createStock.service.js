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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStockService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createStockService = (stockData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { produkId, serialNumber, expiredDate, qty } = stockData;
        if (!produkId || !qty)
            throw new Error("Semua field harus diisi");
        if (expiredDate ? new Date(expiredDate) <= new Date() : false) {
            throw new Error("Tanggal expired tidak boleh di hari ini atau kurang dari hari ini");
        }
        const newStock = yield prisma_1.default.stok.create({
            data: {
                qty: qty,
                produkId: produkId,
                serialNumber: serialNumber,
                expiredDate: expiredDate ? new Date(expiredDate) : undefined,
                status: "Tersedia",
            }
        });
        return {
            "message": "stock added",
            "data": newStock
        };
    }
    catch (err) {
        console.error('Error in createStockService:', err);
        throw err instanceof Error ? err : new Error("Failed to create Stock");
    }
});
exports.createStockService = createStockService;
