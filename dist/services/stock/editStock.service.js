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
exports.editStockService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const editStockService = (stockData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, serialNumber } = stockData;
        const cashier = yield prisma_1.default.pengguna.findUnique({
            where: { id: userId },
        });
        if (!cashier) {
            throw new Error("Unauthorized");
        }
        const dataToUpdate = {};
        if (stockData.status !== undefined)
            dataToUpdate.status = stockData.status;
        const stock = yield prisma_1.default.stok.update({
            where: {
                serialNumber: serialNumber,
            },
            data: dataToUpdate,
        });
        return {
            message: "Stok berhasil diubah",
            data: stock,
        };
    }
    catch (err) {
        console.error("Error in editStockService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit Stock");
    }
});
exports.editStockService = editStockService;
