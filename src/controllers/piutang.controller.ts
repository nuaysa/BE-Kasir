import { getAllPiutangService } from "../services/piutang/getAllPiutang.service";
import { Request, Response } from "express";

export class PiutangController {
  async getAllPiutangController(req: Request, res: Response) {
    try {
      const status = req.query.status;

      const piutang = await getAllPiutangService({
        status: status as "Lunas" | "BelumLunas"
      });

      res.status(200).send(piutang);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
