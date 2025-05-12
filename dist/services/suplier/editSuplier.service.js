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
exports.editSuplierService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const editSuplierService = (suplier) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { suplierId, namaSuplier, kontak } = suplier;
        if (!suplierId)
            throw new Error("tentukan id suplier yang ingin diubah");
        const dataToUpdate = {};
        if (namaSuplier !== undefined)
            dataToUpdate.nama = namaSuplier;
        if (kontak !== undefined)
            dataToUpdate.kontak = kontak;
        if (Object.keys(dataToUpdate).length === 0) {
            throw new Error("Tidak ada field yang dikirim untuk diubah");
        }
        const newSuplier = yield prisma_1.default.suplier.update({
            where: {
                id: suplierId,
            },
            data: dataToUpdate,
        });
        return {
            message: "Suplier berhasil diubah",
            data: newSuplier,
        };
    }
    catch (err) {
        console.error("Error in editSuplierService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit suplier");
    }
});
exports.editSuplierService = editSuplierService;
