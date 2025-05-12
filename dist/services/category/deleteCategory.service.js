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
exports.deleteCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const deleteCategoryService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = categoryData;
        if (!categoryId)
            throw new Error("tentukan id kategori yang ingin dihapus");
        const deletedCategory = yield prisma_1.default.kategori.update({
            where: {
                id: categoryId,
            },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
            include: {
                Produk: true,
            },
        });
        if (deletedCategory.Produk.length > 0) {
            yield prisma_1.default.produk.updateMany({
                where: {
                    kategoriId: deletedCategory.id,
                },
                data: {
                    isDeleted: true,
                    deletedAt: new Date(),
                },
            });
        }
        return {
            message: "Kategori dan produk yang bersangkutan berhasil dihapus",
            data: deletedCategory,
            product: deletedCategory.Produk,
        };
    }
    catch (err) {
        console.error("Error in deleteCategoryService:", err);
        throw err instanceof Error ? err : new Error("Failed to delete category");
    }
});
exports.deleteCategoryService = deleteCategoryService;
