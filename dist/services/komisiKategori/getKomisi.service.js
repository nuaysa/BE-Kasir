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
exports.getKomisiKategoriService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getKomisiKategoriService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const komisiRules = yield prisma_1.default.komisiKategori.findMany({
            include: {
                kategori: {
                    select: {
                        id: true,
                        nama: true,
                        isDeleted: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        const activeRules = komisiRules.filter((rule) => !rule.kategori.isDeleted);
        return activeRules.map((rule) => ({
            id: rule.id,
            persen: rule.persen,
            kategori: {
                id: rule.kategori.id,
                nama: rule.kategori.nama,
            },
            createdAt: rule.createdAt,
        }));
    }
    catch (err) {
        console.error("Error in getKomisiKategoriService:", err);
        throw err instanceof Error ? err : new Error("Failed to get Komisi");
    }
});
exports.getKomisiKategoriService = getKomisiKategoriService;
