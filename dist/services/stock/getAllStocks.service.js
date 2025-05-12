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
exports.getAllstockService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllstockService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, status, sortBy = "id", order = "asc", page = 1, pageSize = 20, } = data;
        const whereCondition = status ? { status } : {};
        const [stock, total] = yield prisma_1.default.$transaction([
            prisma_1.default.stok.findMany({
                where: whereCondition,
                orderBy: { [sortBy]: order },
                include: {
                    produk: {
                        select: {
                            nama: true,
                            kategori: {
                                select: { nama: true },
                            },
                        },
                    },
                },
                skip: (page - 1) * pageSize,
                take: pageSize,
            }),
            prisma_1.default.stok.count({ where: whereCondition }),
        ]);
        return {
            message: "Data stock berhasil diambil",
            data: stock,
            meta: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            },
        };
    }
    catch (err) {
        console.error("Error in getAllstockService:", err);
        throw new Error("Gagal mengambil data stock");
    }
});
exports.getAllstockService = getAllstockService;
