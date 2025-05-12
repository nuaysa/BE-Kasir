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
exports.getMetodeBayarService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getMetodeBayarService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma_1.default.metodeBayar.findMany({
            orderBy: { id: "asc" },
            select: {
                id: true,
                nama: true,
            },
        });
    }
    catch (err) {
        console.error("Error in getMetodeBayarService:", err);
        throw err instanceof Error ? err : new Error("Failed to get metode bayar");
    }
});
exports.getMetodeBayarService = getMetodeBayarService;
