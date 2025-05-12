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
exports.getPembelianByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getPembelianByIdService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pembelianId } = query;
        if (!pembelianId)
            throw new Error("tentukan id pembelian yang ingin ditampilkan");
        const pembelian = yield prisma_1.default.pembelian.findUnique({
            where: {
                id: pembelianId,
            },
            include: {
                PembelianDetail: {
                    include: {
                        produk: true,
                    },
                },
                suplier: true,
            },
        });
        if (!pembelian)
            throw new Error("Pembelian tidak ditemukan");
        return {
            message: "Pembelian ditemukan",
            data: pembelian,
        };
    }
    catch (err) {
        console.error("Error in getPembelianByIdService:", err);
        throw err instanceof Error ? err : new Error("Failed to get pembelian by id");
    }
});
exports.getPembelianByIdService = getPembelianByIdService;
