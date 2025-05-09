import { Request, Response } from "express";
import { createMetodeBayarService } from "../services/metode bayar/createMetodeBayar.service";
import { getMetodeBayarService } from "../services/metode bayar/getMetodeBayar.service";

export class MetodeBayarController {
  async createMetodeBayarController(req: Request, res: Response): Promise<void> {
    try {
      const { namaMetode } = req.body;

      if (!namaMetode) throw new Error("Nama metode tidak boleh kosong");

      const metode = await createMetodeBayarService({
        namaMetode: namaMetode,
      });

      res.status(200).json({
        success: true,
        data: metode.data,
      });
    } catch (err: any) {
      console.error("Error in createMetodeBayarController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async getMetodeBayarController(req: Request, res: Response): Promise<void> {
    try {
      const metode = await getMetodeBayarService();

      res.status(200).json({
        success: true,
        data: metode,
      });
    } catch (err: any) {
      console.error("Error in getMetodeBayarController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }
}
