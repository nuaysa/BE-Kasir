"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStrukHTML = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const generateStrukHTML = (transaksi) => {
    var _a, _b, _c;
    const filePath = path_1.default.join(process.cwd(), "src", "templates", "struk.hbs");
    const templateSource = fs_1.default.readFileSync(filePath, "utf-8");
    const template = handlebars_1.default.compile(templateSource);
    const items = transaksi.PenjualanDetail.map((item) => {
        var _a;
        return ({
            nama: (_a = item.produk) === null || _a === void 0 ? void 0 : _a.nama,
            qty: item.qty,
            subtotal: (item.qty * item.harga).toLocaleString("id-ID"),
        });
    });
    const html = template({
        id: transaksi.id.toString().padStart(3, "0"),
        kasir: ((_a = transaksi.kasir) === null || _a === void 0 ? void 0 : _a.nama) || "Kasir",
        tanggal: new Date(transaksi.createdAt).toLocaleString("id-ID"),
        metodeBayar: ((_b = transaksi.metodeBayar) === null || _b === void 0 ? void 0 : _b.nama) || "-",
        items,
        total: ((_c = transaksi.total) !== null && _c !== void 0 ? _c : 0).toLocaleString("id-ID"),
    });
    return html;
};
exports.generateStrukHTML = generateStrukHTML;
