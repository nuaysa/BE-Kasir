import { getAllPenjualanService } from "../services/penjualan/getAllPenjualan.service";
import { createPenjualanService } from "../services/penjualan/createPenjualan.service";
import { getPenjualanByIdService } from "../services/penjualan/getPenjualanById.service";
import { Request, Response } from "express";
import { sendEmailService } from "../services/penjualan/sendEmail.service";
import { getPenjualanByUserService } from "../services/penjualan/getPenjualanByUser.service";

export class PenjualanController {
  async getAllpenjualanControler(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
      const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;

      const result = await getAllPenjualanService({
        userId,
        page: page ? Number(page) : undefined,
        pageSize: pageSize ? Number(pageSize) : undefined,
        sortBy: sortBy as "tanggal" | "total",
        order: order as "asc" | "desc",
        filterBy: filterBy as "tanggal" | "kasir" | "tipe",
        filterValue: filterValue as string,
      });

      res.status(200).json({
        success: true,
        data: result.data,
        meta: result.meta,
      });
    } catch (err: any) {
      console.error("Error in getAllPenjualan:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }
  async getPenjualanById(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
      const penjualanId = req.params.id;

      const penjualan = await getPenjualanByIdService({
        userId: userId,
        penjualanId: +penjualanId,
      });

      res.status(200).json({
        success: true,
        data: penjualan,
      });
    } catch (err: any) {
      console.error("Error in getAllPenjualan:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }
  async getKasirPenjualan(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
     
      const penjualan = await getPenjualanByUserService({
        userId: userId,
      });

      res.status(200).json({
        success: true,
        data: penjualan,
      });
    } catch (err: any) {
      console.error("Error in getAllPenjualan:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async createPenjualanController(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;
      const { metodeBayarId, items } = req.body;

      const result = await createPenjualanService({
        kasirId: userId,
        metodeBayarId,
        items,
      });

      res.status(201).json({
        success: true,
        message: result.message,
        penjualanId: result.penjualanId,
        total: result.total,
      });
    } catch (err: any) {
      console.error("Error in createPenjualan:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async sendEmailController(req: Request, res: Response) {
    try {
      const { emailCustomer } = req.params;
      const { id } = req.params;

      await sendEmailService({
        penjualanId: Number(id),
        emailCustomer,
      });

      res.status(200).json({ message: "Struk berhasil dikirim ke email!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error instanceof Error ? error.message : "Gagal mengirim email" });
    }
  }
}
