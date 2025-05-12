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
exports.getAllPembelianService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllPembelianService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
        const skip = (page - 1) * pageSize;
        const where = {};
        if (filterBy && filterValue) {
            if (filterBy === "tanggal") {
                where.tanggal = {
                    gte: new Date(filterValue),
                    lte: new Date(new Date(filterValue).setHours(23, 59, 59, 999)),
                };
            }
            else if (filterBy === "suplier") {
                where.suplier = {
                    nama: {
                        contains: filterValue,
                        mode: "insensitive",
                    },
                };
            }
            else if (filterBy === "produk") {
                where.produk = {
                    nama: {
                        contains: filterValue,
                        mode: "insensitive",
                    },
                };
            }
        }
        const orderBy = {};
        if (sortBy) {
            if (sortBy === "tanggal") {
                orderBy.tanggal = order || "asc";
            }
            else if (sortBy === "totalHarga") {
                orderBy.totalHarga = order || "asc";
            }
        }
        const pembelian = yield prisma_1.default.pembelian.findMany({
            where,
            orderBy,
            include: {
                PembelianDetail: {
                    include: {
                        produk: true,
                    },
                },
                suplier: true,
            },
            skip,
            take: pageSize,
        });
        const totalPembelian = yield prisma_1.default.pembelian.count({ where });
        return {
            data: pembelian,
            meta: {
                total: totalPembelian,
                page,
                pageSize,
            },
        };
    }
    catch (err) {
        console.error("Error in getAllPembelianService:", err);
        throw err instanceof Error ? err : new Error("Failed to get all pembelian");
    }
});
exports.getAllPembelianService = getAllPembelianService;
