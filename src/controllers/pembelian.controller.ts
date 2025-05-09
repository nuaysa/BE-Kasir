import { Request, Response } from "express";
import { createPembelianService } from "../services/pembelian/createPembelian.service";
import { getPembelianByIdService } from "../services/pembelian/getPembelianById.service";
import { editPembelianService } from "../services/pembelian/editPembelian.service";
import { getAllPembelianService } from "../services/pembelian/getAllPembelian.service";

interface ItemPembelian {
  produkId: number;
  qty: number;
  harga: number;
  expiredDate?: string;
  serialNumber?: string;
}

interface CreatePembelianData {
  suplierId: number;
  items: ItemPembelian[];
  status: "Lunas" | "Kredit";
  tanggalJatuhTempo?: Date;
}

export class PembelianController {
  async createPembelianController(req: Request, res: Response): Promise<void> {
    try {
      const { suplierId, items, status, tanggalJatuhTempo }: CreatePembelianData = req.body;

      if (!suplierId || !items || items.length === 0) {
        throw { statusCode: 400, message: "Data supplier dan items harus diisi" };
      }

      const result = await createPembelianService({
        suplierId,
        items: items.map((item) => ({
          produkId: item.produkId,
          qty: item.qty,
          harga: item.harga,
          expiredDate: item.expiredDate,
          serialNumber: item.serialNumber,
        })),
        status,
        tanggalJatuhTempo: tanggalJatuhTempo ? new Date(tanggalJatuhTempo) : undefined,
      });

      res.status(201).json({
        success: true,
        data: result,
        message: "Pembelian berhasil dibuat",
      });
    } catch (err: any) {
      console.error("Error in createPembelianController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async editPembelianController(req: Request, res: Response): Promise<void> {
    try {
      const pembelianId = Number(req.params.id);
      const { statusPembelian, statusPiutang } = req.body;

      if (!pembelianId) throw new Error("tentukan id pembelian yang ingin diubah");

      const pembelian = await editPembelianService({
        pembelianId: Number(pembelianId),
        statusPembelian: statusPembelian,
        statusPiutang: statusPiutang,
      });

      res.status(200).json({
        success: true,
        message: pembelian.message,
        data: pembelian.data,
      });
    } catch (err: any) {
      console.error("Error in editPembelianController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async getPembelianByIdController(req: Request, res: Response): Promise<void> {
    try {
      const pembelianId = Number(req.params.id); 
      if (!pembelianId) throw new Error("tentukan id pembelian yang ingin ditampilkan");

      const pembelian = await getPembelianByIdService({
        pembelianId: pembelianId,
      });

      res.status(200).json({
        success: true,
        message: pembelian.message,
        data: pembelian.data,
      });
    } catch (err: any) {
      console.error("Error in getPembelianByIdController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }

  async getAllPembelianController(req: Request, res: Response): Promise<void> {
    try {
      const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;
      const pembelian = await getAllPembelianService({
        page: page as number | undefined,
        pageSize: pageSize as number | undefined,
        sortBy: sortBy as "tanggal" | "totalHarga",
        order: order as "asc" | "desc",
        filterBy: filterBy as "tanggal" | "suplier" | "produk",
        filterValue: filterValue as string,
      });

      res.status(200).json({
        success: true,
        data: pembelian,
      });
    } catch (err: any) {
      console.error("Error in getAllPembelianController:", err.message);
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Terjadi kesalahan server",
      });
    }
  }
}
