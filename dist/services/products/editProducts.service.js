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
exports.editProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const editProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!productData.productId)
            throw new Error("tentukan id produk yang ingin diubah");
        if (!productData.hargaJualGrosir && !productData.qtyMinGrosir && !productData.stok && !productData.nama && !productData.kategoriId && !productData.hargaBeli && !productData.hargaJualRetail) {
            throw new Error("Isi data yang mau diedit");
        }
        if (typeof productData.hargaJualRetail !== "undefined" && typeof productData.hargaBeli !== "undefined" && productData.hargaJualRetail <= productData.hargaBeli) {
            throw new Error("Harga jual retail harus lebih besar dari harga beli");
        }
        const editedProduct = yield prisma_1.default.produk.update({
            where: {
                id: productData.productId,
            },
            data: {
                nama: productData.nama,
                kategoriId: productData.kategoriId,
                hargaBeli: productData.hargaBeli,
                hargaJualRetail: productData.hargaJualRetail,
                hargaJualGrosir: productData.hargaJualGrosir,
                qtyMinGrosir: productData.qtyMinGrosir,
            },
        });
        return {
            message: "Produk berhasil diedit",
            data: editedProduct,
        };
    }
    catch (err) {
        console.error("Error in editProductService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit product");
    }
});
exports.editProductService = editProductService;
