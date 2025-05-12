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
exports.getDashboardStats = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getDashboardStats = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    const wherePenjualan = Object.assign({ tanggal: {
            gte: startOfDay,
            lte: endOfDay,
        } }, (userId && { kasirId: userId }));
    const penjualanHariIni = yield prisma_1.default.penjualan.findMany({
        where: wherePenjualan,
        include: {
            PenjualanDetail: {
                select: { produkId: true },
            },
        },
    });
    const todaySales = penjualanHariIni.reduce((sum, p) => sum + p.total, 0);
    const transactionCount = penjualanHariIni.length;
    const produkCount = {};
    for (const p of penjualanHariIni) {
        for (const d of p.PenjualanDetail) {
            produkCount[d.produkId] = (produkCount[d.produkId] || 0) + 1;
        }
    }
    const mostSoldProductId = (_a = Object.entries(produkCount)
        .sort((a, b) => b[1] - a[1])[0]) === null || _a === void 0 ? void 0 : _a[0];
    let popularProduct = "-";
    if (mostSoldProductId) {
        const produk = yield prisma_1.default.produk.findUnique({
            where: { id: Number(mostSoldProductId) },
            select: { nama: true },
        });
        if (produk)
            popularProduct = produk.nama;
    }
    return {
        todaySales,
        transactionCount,
        popularProduct,
    };
});
exports.getDashboardStats = getDashboardStats;
