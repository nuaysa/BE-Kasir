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
exports.createPenjualanService = void 0;
const laporan_helper_1 = require("../../helper/laporan.helper");
const prisma_1 = __importDefault(require("../../prisma"));
const createPenjualanService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { kasirId, metodeBayarId, items } = data;
        console.log(data, "createPenjualanService data:", items);
        if (!kasirId || !metodeBayarId || !items || items.length === 0) {
            throw new Error("Data penjualan tidak lengkap");
        }
        const stokDipakai = {};
        for (const item of items) {
            const stokTersedia = yield prisma_1.default.stok.findMany({
                where: {
                    produkId: item.produkId,
                    status: "Tersedia",
                },
                take: item.qty,
            });
            if (stokTersedia.length < item.qty) {
                throw new Error(`Stok tidak cukup untuk produk ID ${item.produkId}`);
            }
            stokDipakai[item.produkId] = stokTersedia.map((s) => s.id);
        }
        const { penjualanId, totalHarga } = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            const penjualan = yield tx.penjualan.create({
                data: {
                    kasirId,
                    metodeBayarId,
                    total: 0,
                },
            });
            let totalHarga = 0;
            for (const item of items) {
                const stokIds = stokDipakai[item.produkId];
                for (let i = 0; i < item.qty; i++) {
                    const stokId = stokIds[i];
                    const produk = yield tx.produk.findUnique({
                        where: { id: item.produkId },
                        select: {
                            kategori: { select: { komisi: true } },
                            hargaJualGrosir: true,
                            hargaJualRetail: true,
                            qtyMinGrosir: true,
                        },
                    });
                    if (!produk)
                        throw new Error("Produk tidak ditemukan");
                    const tipe = item.qty >= produk.qtyMinGrosir ? "Grosir" : "Eceran";
                    const harga = tipe === "Grosir" ? produk.hargaJualGrosir : produk.hargaJualRetail;
                    const detail = yield tx.penjualanDetail.create({
                        data: {
                            penjualanId: penjualan.id,
                            stokId,
                            harga,
                            qty: 1,
                            tipe,
                            produkId: item.produkId,
                        },
                    });
                    const persenKomisi = ((_c = (_b = (_a = produk === null || produk === void 0 ? void 0 : produk.kategori) === null || _a === void 0 ? void 0 : _a.komisi) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.persen) || 0;
                    const komisiAmount = Math.floor((detail.harga * persenKomisi) / 100);
                    yield tx.komisiKasir.create({
                        data: {
                            penjualanDetailId: detail.id,
                            kasirId,
                            jumlah: komisiAmount,
                        },
                    });
                    yield tx.stok.update({
                        where: { id: stokId },
                        data: { status: "Terjual" },
                    });
                    totalHarga += harga;
                }
            }
            yield tx.penjualan.update({
                where: { id: penjualan.id },
                data: { total: totalHarga },
            });
            return { penjualanId: penjualan.id, totalHarga };
        }));
        yield (0, laporan_helper_1.generateLaporanHarian)({ tanggal: new Date() });
        return {
            message: "Penjualan berhasil diproses",
            penjualanId,
            total: totalHarga,
        };
    }
    catch (err) {
        console.error("Error in createPenjualanService:", err);
        throw err instanceof Error ? err : new Error("Gagal memproses penjualan");
    }
});
exports.createPenjualanService = createPenjualanService;
