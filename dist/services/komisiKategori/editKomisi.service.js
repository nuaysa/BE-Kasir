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
exports.editKomisiKategoriService = void 0;
// editKomisi.service.ts
const prisma_1 = __importDefault(require("../../prisma"));
const editKomisiKategoriService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.kategoriId || data.persen === undefined) {
            throw new Error("Semua field harus diisi");
        }
        // Cek apakah komisi sudah ada untuk kategori ini
        const existingKomisi = yield prisma_1.default.komisiKategori.findFirst({
            where: {
                kategoriId: data.kategoriId
            }
        });
        let komisi;
        if (existingKomisi) {
            // Update jika sudah ada
            komisi = yield prisma_1.default.komisiKategori.update({
                where: {
                    id: existingKomisi.id
                },
                data: {
                    persen: data.persen
                }
            });
        }
        else {
            // Buat baru jika belum ada
            komisi = yield prisma_1.default.komisiKategori.create({
                data: {
                    kategoriId: data.kategoriId,
                    persen: data.persen
                }
            });
        }
        return komisi;
    }
    catch (err) {
        console.error("Error in editKomisiKategoriService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit komisi");
    }
});
exports.editKomisiKategoriService = editKomisiKategoriService;
