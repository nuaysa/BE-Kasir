import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { AuthRouter } from "./routers/auth.router"
import { ProductsRouter } from "./routers/product.router"
import { CategoryRouter } from "./routers/category.router"
import { StokRouter } from "./routers/stok.router"
import { PembelianRouter} from "./routers/pembelian.router"
import { SuplierRouter } from "./routers/suplier.router"
import { MetodeBayarRouter } from "./routers/metodeBayar.router"
import { PenjualanRouter } from "./routers/penjualan.router"
import { KomisiKategoriRouter } from "./routers/komisiKategori.router"
import { PiutangRouter } from "./routers/piutang.router"
import { KasirRouter } from "./routers/kasir.router"
import { LaporanRouter } from "./routers/laporan.router"

const PORT: number = 8000

const app:Application = express()
app.use(express.json())
app.use (cors({
    origin: [`${process.env.BASE_URL_FE}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }))

app.get("/api", (req: Request, res: Response) => {
    res.status(200).send("API running")
})

const authRouter = new AuthRouter();
const productRouter = new ProductsRouter();
const categoryRouter = new CategoryRouter();
const stokRouter = new StokRouter();
const pembelianRouter = new PembelianRouter();
const suplierRouter = new SuplierRouter();
const metodeRouter = new MetodeBayarRouter();
const penjualanRouter = new PenjualanRouter();
const komisiKategoriRouter = new KomisiKategoriRouter();
const piutangRouter = new PiutangRouter();
const kasirRouter = new KasirRouter();
const laporanRouter = new LaporanRouter();

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
    console.log(`server running on -> http://localhost:${PORT}/api`)
})