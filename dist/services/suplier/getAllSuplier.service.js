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
exports.getAllSuplierService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllSuplierService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, pageSize = 20, sortBy, order, filterBy, filterValue } = query;
        const skip = (page - 1) * pageSize;
        const where = {};
        if (filterBy && filterValue) {
            if (filterBy === "nama") {
                where.nama = {
                    contains: filterValue,
                    mode: "insensitive",
                };
            }
            else if (filterBy === "kontak") {
                where.kontak = {
                    contains: filterValue,
                    mode: "insensitive",
                };
            }
        }
        const orderBy = {};
        if (sortBy) {
            if (sortBy === "nama") {
                orderBy.nama = order || "asc";
            }
            else if (sortBy === "kontak") {
                orderBy.kontak = order || "asc";
            }
        }
        const suplier = yield prisma_1.default.suplier.findMany({
            where,
            orderBy,
            skip,
            take: pageSize,
        });
        const totalSuplier = yield prisma_1.default.suplier.count({ where });
        const totalPage = Math.ceil(totalSuplier / pageSize);
        const currentPage = page;
        return {
            message: "Suplier ditemukan",
            data: suplier,
            meta: {
                total: totalSuplier,
                page: currentPage,
                pageSize,
                totalPages: totalPage,
            },
        };
    }
    catch (err) {
        console.error("Error in getAllSuplierService:", err);
        throw err instanceof Error ? err : new Error("Failed to get all suplier");
    }
});
exports.getAllSuplierService = getAllSuplierService;
