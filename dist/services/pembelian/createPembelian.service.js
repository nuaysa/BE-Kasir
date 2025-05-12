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
exports.createPembelianService = void 0;
const laporan_helper_1 = require("../../helper/laporan.helper");
const prisma_1 = __importDefault(require("../../prisma"));
const createPembelianService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.suplierId || !data.items || data.items.length === 0) {
            throw new Error("Data supplier dan items harus diisi");
        }
        const total = data.items.reduce((sum, item) => sum + item.harga * item.qty, 0);
        return yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const pembelian = yield prisma.pembelian.create({
                data: Object.assign({ suplierId: data.suplierId, total, status: data.status, PembelianDetail: {
                        create: data.items.map((item) => ({
                            produkId: item.produkId,
                            qty: item.qty,
                            harga: item.harga,
                        })),
                    } }, (data.status === "Kredit" && {
                    Piutang: {
                        create: {
                            jumlah: total,
                            tanggalJatuhTempo: data.tanggalJatuhTempo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                            status: "BelumLunas",
                        },
                    },
                })),
                include: {
                    PembelianDetail: true,
                    Piutang: true,
                },
            });
            for (const item of data.items) {
                for (let i = 0; i < item.qty; i++) {
                    yield prisma.stok.create({
                        data: {
                            produkId: item.produkId,
                            qty: 1,
                            status: "Tersedia",
                            serialNumber: item.serialNumber ? `${item.serialNumber}-${i + 1}` : undefined,
                            expiredDate: item.expiredDate ? new Date(item.expiredDate) : undefined,
                        },
                    });
                }
            }
            yield (0, laporan_helper_1.generateLaporanHarian)({ tanggal: new Date() });
            return pembelian;
        }));
    }
    catch (err) {
        console.error("Error in createPembelianService:", err);
        throw err instanceof Error ? err : new Error("Failed to make Pembelian");
    }
});
exports.createPembelianService = createPembelianService;
