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
exports.getAllPenjualanService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllPenjualanService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
        const skip = (page - 1) * pageSize;
        const cashier = yield prisma_1.default.pengguna.findUnique({
            where: { id: userId },
        });
        if (!cashier) {
            throw new Error("unAuthorized");
        }
        const where = {};
        if (filterBy && filterValue) {
            if (filterBy === "tanggal") {
                where.tanggal = {
                    gte: new Date(filterValue),
                    lte: new Date(new Date(filterValue).setHours(23, 59, 59, 999)),
                };
            }
            else if (filterBy === "kasir") {
                where.kasir = {
                    nama: {
                        contains: filterValue,
                        mode: "insensitive",
                    },
                };
            }
            else if (filterBy === "tipe") {
                where.PenjualanDetail = {
                    some: {
                        tipe: filterValue,
                    },
                };
            }
        }
        const orderBy = {};
        if (sortBy) {
            if (sortBy === "tanggal") {
                orderBy.tanggal = order || "asc";
            }
            else if (sortBy === "total") {
                orderBy.total = order || "asc";
            }
        }
        const penjualan = yield prisma_1.default.penjualan.findMany({
            where,
            orderBy,
            include: {
                PenjualanDetail: {
                    include: {
                        produk: true,
                        Komisi: true,
                    },
                },
                kasir: true,
                metodeBayar: true,
            },
            skip,
            take: pageSize,
        });
        const totalPenjualan = yield prisma_1.default.penjualan.count({ where });
        return {
            data: penjualan,
            meta: {
                total: totalPenjualan,
                page,
                pageSize,
                totalPages: Math.ceil(totalPenjualan / pageSize),
            },
        };
    }
    catch (err) {
        console.error("Error in getAllPenjualanService:", err);
        throw err instanceof Error ? err : new Error("Failed to get all penjualan");
    }
});
exports.getAllPenjualanService = getAllPenjualanService;
