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
exports.getPenjualanByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getPenjualanByIdService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, penjualanId } = query;
        const cashier = yield prisma_1.default.pengguna.findUnique({
            where: { id: userId },
        });
        if (!cashier) {
            throw new Error("unAuthorized");
        }
        if (!penjualanId)
            throw new Error("tentukan id penjualan yang ingin ditampilkan");
        const penjualan = yield prisma_1.default.penjualan.findUnique({
            where: {
                id: penjualanId,
            },
            include: {
                PenjualanDetail: {
                    include: {
                        produk: true
                    },
                },
                kasir: {
                    select: {
                        nama: true,
                        Komisi: true
                    }
                },
                metodeBayar: true,
            },
        });
        return {
            penjualan
        };
    }
    catch (err) {
        console.error("Error in getPenjualanByIdService:", err);
        throw err instanceof Error ? err : new Error("Failed to get penjualan by id");
    }
});
exports.getPenjualanByIdService = getPenjualanByIdService;
