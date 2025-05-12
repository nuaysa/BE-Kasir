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
exports.getChartStats = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const date_fns_1 = require("date-fns");
const getChartStats = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let { startDate, endDate } = data;
        if (!startDate) {
            const earliest = yield prisma_1.default.penjualan.findFirst({
                orderBy: { tanggal: "asc" },
                select: { tanggal: true },
            });
            startDate = (_b = (_a = earliest === null || earliest === void 0 ? void 0 : earliest.tanggal) === null || _a === void 0 ? void 0 : _a.toISOString().split("T")[0]) !== null && _b !== void 0 ? _b : new Date().toISOString().split("T")[0];
        }
        if (!endDate) {
            endDate = new Date().toISOString().split("T")[0];
        }
        const start = new Date(startDate);
        const end = new Date(endDate);
        const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const salesByDay = yield Promise.all(Array.from({ length: daysDiff + 1 }).map((_, i) => __awaiter(void 0, void 0, void 0, function* () {
            const date = new Date(start);
            date.setDate(date.getDate() + i);
            const dayStart = new Date(date.setHours(0, 0, 0, 0));
            const dayEnd = new Date(date.setHours(23, 59, 59, 999));
            const penjualan = yield prisma_1.default.penjualan.aggregate({
                where: { tanggal: { gte: dayStart, lte: dayEnd } },
                _sum: { total: true },
            });
            return {
                tanggal: (0, date_fns_1.format)(dayStart, "dd/MM"),
                total: penjualan._sum.total || 0,
            };
        })));
        const salesByKasirRaw = yield prisma_1.default.penjualan.groupBy({
            by: ["kasirId"],
            where: {
                tanggal: { gte: start, lte: end },
            },
            _count: { id: true },
        });
        const kasirData = yield prisma_1.default.pengguna.findMany({
            where: { id: { in: salesByKasirRaw.map((d) => d.kasirId) }, role: "Kasir" },
            select: { id: true, nama: true },
        });
        const salesByKasir = salesByKasirRaw.map((item) => {
            const kasir = kasirData.find((k) => k.id === item.kasirId);
            return {
                kasir: (kasir === null || kasir === void 0 ? void 0 : kasir.nama) || `Kasir ${item.kasirId}`,
                jumlah: item._count.id,
            };
        });
        const penjualanDetail = yield prisma_1.default.penjualanDetail.findMany({
            where: {
                penjualan: {
                    tanggal: { gte: start, lte: end },
                },
            },
            include: {
                produk: { include: { kategori: true } },
            },
        });
        const kategoriCount = {};
        for (const detail of penjualanDetail) {
            const kategori = ((_c = detail.produk.kategori) === null || _c === void 0 ? void 0 : _c.nama) || "Lainnya";
            kategoriCount[kategori] = (kategoriCount[kategori] || 0) + detail.qty;
        }
        const salesByCategory = Object.entries(kategoriCount).map(([kategori, jumlah]) => ({
            kategori,
            jumlah,
        }));
        return {
            salesByDay,
            salesByKasir,
            salesByCategory,
        };
    }
    catch (err) {
        console.error(err);
        throw new Error("Error fetching chart stats");
    }
});
exports.getChartStats = getChartStats;
