import { editKomisiKategoriService } from "../services/komisiKategori/editKomisi.service";
import { createKomisiKategoriService } from "../services/komisiKategori/createKomisi.service";
import { getKomisiKategoriService } from "../services/komisiKategori/getKomisi.service";
import { Request, Response } from "express";

export class komisiKategoriController {
  async createKomisiKategoriController(req: Request, res: Response) {
    try {
      const { kategoriId, persen } = req.body;

      const komisi = await createKomisiKategoriService({
        kategoriId: kategoriId,
        persen: persen,
      });

      res.status(200).send(komisi);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async editKomisiKategoriController(req: Request, res: Response) {
    try {
      const { kategoriId, persen } = req.body;

      const komisi = await editKomisiKategoriService({
        kategoriId: kategoriId,
        persen: persen,
      });

      res.status(200).send(komisi);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async getKomisiKategoriController(req: Request, res: Response) {
    try {

      const Komisi = await getKomisiKategoriService();

      res.status(200).send(Komisi);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
