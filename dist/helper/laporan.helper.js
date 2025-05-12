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
exports.generateLaporanHarian = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const generateLaporanHarian = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const tanggal = (params === null || params === void 0 ? void 0 : params.tanggal) || new Date();
    const startOfDay = new Date(tanggal.setHours(0, 0, 0, 0));
    const endOfDay = new Date(tanggal.setHours(23, 59, 59, 999));
    return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // 1. Data Stok (selalu dihitung, meski tidak ada transaksi)
        const stokAwal = yield getStokAwal(tx, startOfDay);
        const stokAkhir = yield tx.stok.count({ where: { status: "Tersedia" } });
        // 2. Data Penjualan & Komisi (bisa null)
        const [penjualan, komisi, hpp] = yield Promise.all([
            tx.penjualan.aggregate({
                _sum: { total: true },
                where: { tanggal: { gte: startOfDay, lte: endOfDay } }
            }),
            tx.komisiKasir.aggregate({
                _sum: { jumlah: true },
                where: {
                    penjualanDetail: {
                        penjualan: { tanggal: { gte: startOfDay, lte: endOfDay } }
                    }
                }
            }),
            calculateHPP(tx, startOfDay, endOfDay) // Fungsi terpisah
        ]);
        // 3. Simpan/update laporan
        return yield tx.laporanHarian.upsert({
            where: { tanggal: startOfDay },
            update: {
                stokAkhir,
                totalPenjualan: penjualan._sum.total || 0,
                totalHPP: hpp,
                totalLaba: (penjualan._sum.total || 0) - hpp - (komisi._sum.jumlah || 0),
                totalKomisi: komisi._sum.jumlah || 0,
            },
            create: {
                tanggal: startOfDay,
                stokAwal,
                stokAkhir,
                totalPenjualan: penjualan._sum.total || 0,
                totalHPP: hpp,
                totalLaba: (penjualan._sum.total || 0) - hpp - (komisi._sum.jumlah || 0),
                totalKomisi: komisi._sum.jumlah || 0,
            }
        });
    }));
});
exports.generateLaporanHarian = generateLaporanHarian;
// Helper untuk HPP
const calculateHPP = (tx, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    const details = yield tx.penjualanDetail.findMany({
        where: { penjualan: { tanggal: { gte: start, lte: end } } },
        include: { produk: { select: { hargaBeli: true } } }
    });
    return details.reduce((sum, d) => sum + (d.produk.hargaBeli * d.qty), 0);
});
// Helper untuk Stok Awal
const getStokAwal = (tx, startOfDay) => __awaiter(void 0, void 0, void 0, function* () {
    const laporanKemarin = yield tx.laporanHarian.findFirst({
        where: { tanggal: { lt: startOfDay } },
        orderBy: { tanggal: "desc" },
    });
    return (laporanKemarin === null || laporanKemarin === void 0 ? void 0 : laporanKemarin.stokAkhir) || (yield tx.stok.count({
        where: { status: "Tersedia", createdAt: { lt: startOfDay } }
    }));
});
