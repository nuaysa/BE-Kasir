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
exports.sendEmailService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const generateStrukHTML_1 = require("../../utils/generateStrukHTML");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const nodemailer_1 = require("../../libs/nodemailer");
const handlebars_1 = __importDefault(require("handlebars"));
const sendEmailService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { penjualanId, emailCustomer } = data;
        if (!emailCustomer) {
            throw new Error("Email customer harus diisi");
        }
        const transaksi = yield prisma_1.default.penjualan.findUnique({
            where: { id: Number(penjualanId) },
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
        });
        if (!transaksi) {
            throw new Error("Transaksi tidak ditemukan");
        }
        const templatePath = path_1.default.join(__dirname, "../../templates", "struk.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const compiledTemplate = handlebars_1.default.compile(templateSource);
        const html = (0, generateStrukHTML_1.generateStrukHTML)(transaksi);
        yield nodemailer_1.transporter.sendMail({
            from: '"Aplikasi Kasir" <no-reply@kasir.com>',
            to: emailCustomer,
            subject: `Struk Transaksi #${penjualanId}`,
            html,
        });
        return { message: "Email berhasil dikirim" };
    }
    catch (err) {
        console.error("Error in sendEmailService:", err);
        throw err instanceof Error ? err : new Error("Failed to send email");
    }
});
exports.sendEmailService = sendEmailService;
