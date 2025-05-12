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
exports.deleteProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const deleteProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = product;
        if (!productId)
            throw new Error("tentukan id produk yang ingin dihapus");
        const deletedProduct = yield prisma_1.default.produk.update({
            where: {
                id: productId,
            },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
        });
        return {
            message: "Produk berhasil dihapus",
            data: deletedProduct,
        };
    }
    catch (err) {
        console.error("Error in deleteProductService:", err);
        throw err instanceof Error ? err : new Error("Failed to delete product");
    }
});
exports.deleteProductService = deleteProductService;
