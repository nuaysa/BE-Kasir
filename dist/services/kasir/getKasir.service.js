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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getpenggunaByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getpenggunaByIdService = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { penggunaId } = params;
        const pengguna = yield prisma_1.default.pengguna.findUnique({
            where: {
                id: penggunaId,
            },
            include: {
                Komisi: true,
                Penjualan: true,
            },
        });
        if (!pengguna) {
            throw new Error("pengguna not found");
        }
        const { password } = pengguna, safepenggunaData = __rest(pengguna, ["password"]);
        return {
            message: "pengguna data retrieved successfully",
            data: safepenggunaData,
        };
    }
    catch (err) {
        console.error("Error in getpenggunaByIdService:", err);
        throw err;
    }
});
exports.getpenggunaByIdService = getpenggunaByIdService;
