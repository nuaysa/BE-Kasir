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
exports.createMetodeBayarService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createMetodeBayarService = (metode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { namaMetode } = metode;
        if (!namaMetode)
            throw new Error("Nama metode tidak boleh kosong");
        return yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const createdMetode = yield prisma.metodeBayar.create({
                data: { nama: namaMetode },
            });
            return {
                message: "Metode bayar berhasil dibuat",
                data: createdMetode,
            };
        }));
    }
    catch (err) {
        console.error("Error in createMetodeBayarService:", err);
        throw err instanceof Error ? err : new Error("Failed to create metode bayar");
    }
});
exports.createMetodeBayarService = createMetodeBayarService;
