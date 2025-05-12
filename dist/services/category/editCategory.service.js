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
exports.editCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const editKomisi_service_1 = require("../komisiKategori/editKomisi.service");
const editCategoryService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!categoryData.categoryId)
            throw new Error("Tentukan id kategori yang ingin diubah");
        if (!categoryData.name)
            throw new Error("Nama kategori harus diisi");
        const result = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const updatedCategory = yield prisma.kategori.update({
                where: { id: categoryData.categoryId },
                data: { nama: categoryData.name },
            });
            let komisiData = null;
            if (categoryData.komisi !== undefined) {
                komisiData = yield (0, editKomisi_service_1.editKomisiKategoriService)({
                    kategoriId: updatedCategory.id,
                    persen: categoryData.komisi,
                });
            }
            return { category: updatedCategory, komisi: komisiData };
        }));
        return {
            message: "Category updated",
            data: result.category,
            komisi: result.komisi,
        };
    }
    catch (err) {
        console.error("Error in editCategoryService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit category");
    }
});
exports.editCategoryService = editCategoryService;
