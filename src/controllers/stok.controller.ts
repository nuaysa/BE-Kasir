import { Request, Response } from "express";
import { createStockService } from "../services/stock/createStock.service";
import { editStockService } from "../services/stock/editStock.service";
import { getAllstockService } from "../services/stock/getAllStocks.service";

export class StokController {
  async createStokController(req: Request, res: Response) {
    try {
      const { produkId, serialNumber, expiredDate, status, qty } = req.body;

      const Stocks = await createStockService({
        produkId: produkId,
        serialNumber: serialNumber,
        expiredDate: expiredDate,
        qty: qty,
      });

      res.status(200).send(Stocks);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async editStockController(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
      const { quantity, status, serialNumber } = req.body;

      const Product = await editStockService({
        userId: userId,
        serialNumber: serialNumber,
        status: status,
      });

      res.status(200).send(Product);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getAllStockController(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
      const { status, sortBy, order } = req.query;

      const stock = await getAllstockService({
        userId,
        status: status as "Tersedia" | "Terjual" | "Rusak" | "Kadaluarsa",
        sortBy: sortBy as any,
        order: order as "asc" | "desc",
      });
      res.status(200).send(stock);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
