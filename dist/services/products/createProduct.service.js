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
exports.createProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (!productData.nama)
            throw new Error("Nama produk harus diisi");
        if (!productData.kategoriId)
            throw new Error("Kategori harus dipilih");
        if (productData.hargaJualRetail <= productData.hargaBeli) {
            throw new Error("Harga jual retail harus lebih besar dari harga beli");
        }
        if (productData.hargaJualGrosir && productData.hargaJualGrosir >= productData.hargaJualRetail) {
            throw new Error("Harga grosir harus lebih murah dari harga retail");
        }
        if (!Number.isInteger(productData.hargaBeli) || !Number.isInteger(productData.hargaJualRetail) || (productData.hargaJualGrosir && !Number.isInteger(productData.hargaJualGrosir))) {
            throw new Error("Harga harus bilangan bulat");
        }
        const existingProduct = yield prisma_1.default.produk.findFirst({
            where: { nama: productData.nama },
            include: {
                kategori: true,
            },
        });
        if (existingProduct && !existingProduct.isDeleted) {
            throw new Error("produk dengan nama ini sudah ada");
        }
        if (existingProduct && existingProduct.isDeleted) {
            const restored = yield prisma_1.default.produk.update({
                where: { id: existingProduct.id },
                data: {
                    isDeleted: false,
                    deletedAt: null,
                },
            });
            return {
                message: "Produk di-restore",
                data: restored,
            };
        }
        const newProduct = yield prisma_1.default.produk.create({
            data: {
                nama: productData.nama,
                kategoriId: productData.kategoriId,
                hargaBeli: productData.hargaBeli,
                hargaJualRetail: productData.hargaJualRetail,
                hargaJualGrosir: (_a = productData.hargaJualGrosir) !== null && _a !== void 0 ? _a : 0,
                qtyMinGrosir: productData.qtyMinGrosir || 1,
            },
            include: {
                kategori: true,
            },
        });
        return newProduct;
    }
    catch (err) {
        console.error("Error in createProductService:", err);
        throw err instanceof Error ? err : new Error("Gagal membuat produk");
    }
});
exports.createProductService = createProductService;
