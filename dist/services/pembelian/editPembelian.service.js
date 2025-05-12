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
exports.editPembelianService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const editPembelianService = (pembelian) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pembelianId, statusPembelian, statusPiutang } = pembelian;
        if (!pembelianId)
            throw new Error("Tentukan id pembelian yang ingin diubah");
        return yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const updatedPembelian = yield prisma.pembelian.update({
                where: { id: pembelianId },
                data: { status: statusPembelian },
            });
            if (statusPembelian === "Lunas") {
                yield prisma.piutang.updateMany({
                    where: { pembelianId },
                    data: { status: "Lunas" },
                });
            }
            if (statusPiutang) {
                yield prisma.piutang.updateMany({
                    where: { pembelianId },
                    data: { status: statusPiutang },
                });
            }
            return {
                message: "Pembelian dan piutang berhasil diupdate",
                data: updatedPembelian,
            };
        }));
    }
    catch (err) {
        console.error("Error in editPembelianService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit pembelian");
    }
});
exports.editPembelianService = editPembelianService;
