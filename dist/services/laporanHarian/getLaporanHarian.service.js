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
exports.getLaporanHarianService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getLaporanHarianService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, pageSize = 20, sortBy = "tanggal", order = "desc", filterDate } = params;
        const skip = (page - 1) * pageSize;
        const where = {};
        console.log("where", where, "filterDate", filterDate);
        if (filterDate) {
            const start = new Date(filterDate);
            const end = new Date(new Date(filterDate).setHours(23, 59, 59, 999));
            where.tanggal = {
                gte: start,
                lte: end,
            };
        }
        const orderBy = {};
        if (sortBy === "totalPenjualan") {
            orderBy.totalPenjualan = order;
        }
        else {
            orderBy.tanggal = order;
        }
        const laporan = yield prisma_1.default.laporanHarian.findMany({
            where,
            orderBy,
            skip,
            take: pageSize,
        });
        const total = yield prisma_1.default.laporanHarian.count({ where });
        return {
            data: laporan,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            },
        };
    }
    catch (err) {
        console.error("Error in getLaporanHarianService:", err);
        throw err instanceof Error ? err : new Error("Failed to get laporan harian");
    }
});
exports.getLaporanHarianService = getLaporanHarianService;
