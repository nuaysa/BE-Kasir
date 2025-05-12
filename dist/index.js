"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = require("./routers/auth.router");
const product_router_1 = require("./routers/product.router");
const category_router_1 = require("./routers/category.router");
const stok_router_1 = require("./routers/stok.router");
const pembelian_router_1 = require("./routers/pembelian.router");
const suplier_router_1 = require("./routers/suplier.router");
const metodeBayar_router_1 = require("./routers/metodeBayar.router");
const penjualan_router_1 = require("./routers/penjualan.router");
const komisiKategori_router_1 = require("./routers/komisiKategori.router");
const piutang_router_1 = require("./routers/piutang.router");
const kasir_router_1 = require("./routers/kasir.router");
const laporan_router_1 = require("./routers/laporan.router");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [`${process.env.BASE_URL_FE}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.get("/api", (req, res) => {
    res.status(200).send("API running");
});
const authRouter = new auth_router_1.AuthRouter();
const productRouter = new product_router_1.ProductsRouter();
const categoryRouter = new category_router_1.CategoryRouter();
const stokRouter = new stok_router_1.StokRouter();
const pembelianRouter = new pembelian_router_1.PembelianRouter();
const suplierRouter = new suplier_router_1.SuplierRouter();
const metodeRouter = new metodeBayar_router_1.MetodeBayarRouter();
const penjualanRouter = new penjualan_router_1.PenjualanRouter();
const komisiKategoriRouter = new komisiKategori_router_1.KomisiKategoriRouter();
const piutangRouter = new piutang_router_1.PiutangRouter();
const kasirRouter = new kasir_router_1.KasirRouter();
const laporanRouter = new laporan_router_1.LaporanRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/product", productRouter.getRouter());
app.use("/api/category", categoryRouter.getRouter());
app.use("/api/stok", stokRouter.getRouter());
app.use("/api/pembelian", pembelianRouter.getRouter());
app.use("/api/suplier", suplierRouter.getRouter());
app.use("/api/bayar", metodeRouter.getRouter());
app.use("/api/penjualan", penjualanRouter.getRouter());
app.use("/api/komisi", komisiKategoriRouter.getRouter());
app.use("/api/piutang", piutangRouter.getRouter());
app.use("/api/kasir", kasirRouter.getRouter());
app.use("/api/laporan", laporanRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
});
