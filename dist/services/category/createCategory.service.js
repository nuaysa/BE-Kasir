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
exports.createCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createKomisi_service_1 = require("../komisiKategori/createKomisi.service");
const createCategoryService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, komisi } = categoryData;
        if (!name)
            throw new Error("Nama kategori harus diisi");
        const existingCategory = yield prisma_1.default.kategori.findUnique({
            where: { nama: name },
        });
        if (existingCategory && !existingCategory.isDeleted) {
            throw new Error("Kategori dengan nama ini sudah ada");
        }
        if (existingCategory && existingCategory.isDeleted) {
            const restored = yield prisma_1.default.kategori.update({
                where: { id: existingCategory.id },
                data: {
                    isDeleted: false,
                    deletedAt: null,
                },
            });
            return {
                message: "Kategori di-restore",
                data: restored,
            };
        }
        const newCategory = yield prisma_1.default.kategori.create({
            data: {
                nama: name
            }
        });
        const komisiData = yield (0, createKomisi_service_1.createKomisiKategoriService)({
            persen: komisi || 0,
            kategoriId: newCategory.id
        });
        return {
            "message": "category created",
            "data": newCategory,
            "komisi": komisiData
        };
    }
    catch (err) {
        console.error("Error in createProductService:", err);
        throw err instanceof Error ? err : new Error("Failed to create category");
    }
});
exports.createCategoryService = createCategoryService;
