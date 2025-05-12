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
exports.getProductsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getProductsService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, pageSize = 10, category, search, sortBy = "nama", order = "asc", minPrice, maxPrice } = params;
        const skip = (page - 1) * pageSize;
        const where = {
            isDeleted: false,
            AND: [
                ...(search
                    ? [
                        {
                            nama: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ]
                    : []),
                ...(category
                    ? [
                        {
                            kategori: {
                                nama: category,
                            },
                        },
                    ]
                    : []),
                ...(minPrice !== undefined
                    ? [
                        {
                            hargaJualRetail: {
                                gte: minPrice,
                            },
                        },
                    ]
                    : []),
                ...(maxPrice !== undefined
                    ? [
                        {
                            hargaJualRetail: {
                                lte: maxPrice,
                            },
                        },
                    ]
                    : []),
            ],
        };
        const [products, total] = yield Promise.all([
            prisma_1.default.produk.findMany({
                where,
                orderBy: { [sortBy]: order },
                include: {
                    Stok: true,
                    kategori: true,
                },
                skip,
                take: pageSize,
            }),
            prisma_1.default.produk.count({ where }),
        ]);
        const productsWithStock = products.map(product => {
            const totalAvailableStock = product.Stok
                .filter(stok => stok.status === 'Tersedia')
                .reduce((sum, stok) => sum + stok.qty, 0);
            return Object.assign(Object.assign({}, product), { totalStok: totalAvailableStock });
        });
        return {
            data: productsWithStock,
            meta: {
                total: total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            },
        };
    }
    catch (err) {
        console.error("Error in getAllProductService:", err);
        throw err instanceof Error ? err : new Error("Failed to get products");
    }
});
exports.getProductsService = getProductsService;
