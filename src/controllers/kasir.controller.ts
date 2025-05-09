import { getpenggunaByIdService } from "../services/kasir/getKasir.service";
import { editKasirService } from "../services/kasir/editKasir.service";
import { getAllKasirService } from "../services/kasir/getAllKasir.service";
import { Request, Response } from "express";
import { deleteKasirService } from "../services/kasir/deleteKasir.service";

export class KasirController {
  async getPenggunaByIdController(req: Request, res: Response) {
    try {
      const userId = req.user?.id!;

      const pengguna = await getpenggunaByIdService({
        penggunaId: +userId,
      });

      res.status(200).send(pengguna);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getAllKasirController(req: Request, res: Response) {
    try {
      const kasir = await getAllKasirService();

      res.status(200).send(kasir);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async editKasirController(req: Request, res: Response) {
    try {
      const kasirId = req.params.id!;
      const { nama, kasirname, password } = req.body;

      const kasir = await editKasirService({
        id: +kasirId,
        nama: nama,
        username: kasirname,
      });

      res.status(200).send(kasir);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async deleteKasirController(req: Request, res: Response) {
    try {
      const kasirId = req.params.kasirId;

      const kasir = await deleteKasirService({
      id: +kasirId,
      });

      res.status(200).send(kasir);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
