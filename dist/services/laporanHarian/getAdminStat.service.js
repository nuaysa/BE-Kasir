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
exports.getAdminDashboardStats = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAdminDashboardStats = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    const penjualanHariIni = yield prisma_1.default.penjualan.findMany({
        where: {
            tanggal: {
                gte: startOfDay,
                lte: endOfDay,
            },
        },
        include: {
            PenjualanDetail: { select: { produkId: true } },
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
    const mostSoldProductId = (_a = Object.entries(produkCount).sort((a, b) => b[1] - a[1])[0]) === null || _a === void 0 ? void 0 : _a[0];
    let popularProduct = "-";
    if (mostSoldProductId) {
        const produk = yield prisma_1.default.produk.findUnique({
            where: { id: Number(mostSoldProductId) },
            select: { nama: true },
        });
        if (produk)
            popularProduct = produk.nama;
    }
    const totalSales = yield prisma_1.default.penjualan.aggregate({
        _sum: { total: true },
    });
    const totalTransactions = yield prisma_1.default.penjualan.count();
    const totalKasir = yield prisma_1.default.pengguna.count({
        where: { role: "Kasir" },
        select: { id: true, nama: true },
    });
    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date;
    }).reverse();
    const salesByDay = yield Promise.all(last7Days.map((date) => __awaiter(void 0, void 0, void 0, function* () {
        const start = new Date(date.setHours(0, 0, 0, 0));
        const end = new Date(date.setHours(23, 59, 59, 999));
        const sales = yield prisma_1.default.penjualan.aggregate({
            where: { tanggal: { gte: start, lte: end } },
            _sum: { total: true },
        });
        return {
            date: start.toISOString().slice(0, 10),
            total: sales._sum.total || 0,
        };
    })));
    const salesByKasirRaw = yield prisma_1.default.penjualan.groupBy({
        by: ["kasirId"],
        _count: true,
    });
    const salesByKasir = yield Promise.all(salesByKasirRaw.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const kasir = yield prisma_1.default.pengguna.findUnique({
            where: { id: item.kasirId, role: "Kasir" },
            select: { nama: true },
        });
        return {
            nama: (kasir === null || kasir === void 0 ? void 0 : kasir.nama) || "Tidak diketahui",
            totalTransaksi: item._count,
        };
    })));
    const detail = yield prisma_1.default.penjualanDetail.findMany({
        include: {
            produk: {
                select: {
                    kategori: { select: { nama: true } },
                },
            },
        },
    });
    const categoryMap = {};
    for (const d of detail) {
        const kategori = ((_b = d.produk.kategori) === null || _b === void 0 ? void 0 : _b.nama) || "Lainnya";
        categoryMap[kategori] = (categoryMap[kategori] || 0) + d.id;
    }
    ;
    return {
        summary: {
            todaySales,
            transactionCount,
            popularProduct,
            totalSales: totalSales._sum.total || 0,
            totalTransactions,
            totalKasir,
        },
        salesByDay,
        salesByKasir,
    };
});
exports.getAdminDashboardStats = getAdminDashboardStats;
