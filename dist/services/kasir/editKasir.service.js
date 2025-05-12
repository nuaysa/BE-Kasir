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
exports.editKasirService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const editKasirService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nama, username, password } = data;
        const updateData = {};
        if (nama !== undefined)
            updateData.nama = nama;
        if (username !== undefined)
            updateData.username = username;
        if (password && password.trim() !== "") {
            const hashed = yield bcrypt_1.default.hash(password, 10);
            updateData.password = hashed;
        }
        const kasir = yield prisma_1.default.pengguna.update({
            where: { id },
            data: updateData,
            include: {
                Komisi: true,
            },
        });
        return {
            message: "kasir data",
            data: kasir,
        };
    }
    catch (err) {
        console.error("Error in editKasirService:", err);
        throw err instanceof Error ? err : new Error("Failed to edit kasir");
    }
});
exports.editKasirService = editKasirService;
