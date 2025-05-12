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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const getAllProducts_service_1 = require("../services/products/getAllProducts.service");
const getProductById_service_1 = require("../services/products/getProductById.service");
const createProduct_service_1 = require("../services/products/createProduct.service");
const editProducts_service_1 = require("../services/products/editProducts.service");
const deleteProduct_service_1 = require("../services/products/deleteProduct.service");
class ProductsController {
    getAllProductsController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category, search, sortBy, order, page, pageSize, minPrice, maxPrice } = req.query;
                const result = yield (0, getAllProducts_service_1.getProductsService)({
                    category: category,
                    search: search,
                    sortBy: sortBy,
                    order: order,
                    page: page ? parseInt(page) : undefined,
                    pageSize: pageSize ? parseInt(pageSize) : undefined,
                    minPrice: minPrice ? parseFloat(minPrice) : undefined,
                    maxPrice: maxPrice ? parseFloat(maxPrice) : undefined
                });
                res.status(200).json(result);
            }
            catch (error) {
                console.error("Error in getProductsController:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    ;
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ProductId = req.params;
                const Product = yield (0, getProductById_service_1.getProductByIdService)({
                    id: Number(ProductId.id),
                });
                res.status(200).send(Product);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, kategoriId, hargaBeli, hargaJualRetail, hargaJualGrosir, qtyMinGrosir } = req.body;
                const ProductData = yield (0, createProduct_service_1.createProductService)({
                    nama: nama,
                    kategoriId: +kategoriId,
                    hargaBeli: hargaBeli,
                    hargaJualRetail: hargaJualRetail,
                    hargaJualGrosir: hargaJualGrosir,
                    qtyMinGrosir: qtyMinGrosir,
                });
                res.status(200).send(ProductData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    editProductController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const { nama, kategoriId, hargaBeli, hargaJualRetail, hargaJualGrosir, qtyMinGrosir } = req.body;
                const ProductData = yield (0, editProducts_service_1.editProductService)({
                    productId: Number(productId),
                    nama: nama,
                    kategoriId: kategoriId,
                    hargaBeli: hargaBeli,
                    hargaJualRetail: hargaJualRetail,
                    hargaJualGrosir: hargaJualGrosir,
                    qtyMinGrosir: qtyMinGrosir,
                });
                res.status(200).send(ProductData);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
    deleteProductController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                if (!productId)
                    throw new Error("tentukan id produk yang ingin dihapus");
                const Product = yield (0, deleteProduct_service_1.deleteProductService)({
                    productId: Number(productId),
                });
                res.status(200).send(Product);
            }
            catch (err) {
                res.status(400).send({ message: err.message });
            }
        });
    }
}
exports.ProductsController = ProductsController;
