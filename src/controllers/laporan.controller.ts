import { getDashboardStats } from "../services/laporanHarian/getStats.service";
import { getLaporanHarianService } from "../services/laporanHarian/getLaporanHarian.service";
import { Request, Response } from "express";
import { getChartStats } from "../services/laporanHarian/getChart.service";
import { getAdminDashboardStats } from "../services/laporanHarian/getAdminStat.service";

export class LaporanController {
  async getAlllaporanController(req: Request, res: Response) {
    try {
      const { sortBy, order, page, filterDate, pageSize } = req.query;

      const laporan = await getLaporanHarianService({
        page: page ? parseInt(page as string) : undefined,
        pageSize: pageSize ? parseInt(pageSize as string) : undefined,
        filterDate: filterDate as string,
        sortBy: sortBy as "tanggal" | "totalPenjualan",
        order: order as "asc" | "desc",
      });
      res.status(200).send(laporan);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getStatController(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;

      const stat = await getDashboardStats(userId);
      res.status(200).send(stat);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getAdminStatController(req: Request, res: Response) {
    try {
      const stat = await getAdminDashboardStats();
      res.status(200).send(stat);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getChartController(req: Request, res: Response) {
    try {
      const { startDate, endDate } = req.query as { startDate: string; endDate: string };

      const chart = await getChartStats({ startDate, endDate });
      res.status(200).send(chart);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
