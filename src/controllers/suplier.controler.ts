import { Request, Response } from "express";
import { getAllSuplierService } from "../services/suplier/getAllSuplier.service";
import { createSuplierService } from "../services/suplier/createSuplier.service";
import { editSuplierService } from "../services/suplier/editSuplier.service";

export class SuplierController {
  async getSuplierController(req: Request, res: Response) {
    try {
      const { page, pageSize, sortBy, order, filterBy, filterValue } = req.query;

      const Suplier = await getAllSuplierService({
        page: page as number | undefined,
        pageSize: pageSize as number | undefined,
        sortBy: sortBy as "nama" | "kontak",
        order: order as "asc" | "desc",
        filterBy: filterBy as "nama" | "kontak",
        filterValue: filterValue as string,
      });

      res.status(200).send(Suplier);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
  async createSuplierController(req: Request, res: Response) {
    try {
      const { nama, kontak } = req.body;

      const Suplier = await createSuplierService({
        namaSuplier: nama,
        kontak: kontak,
      });

      res.status(200).send(Suplier);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async editSuplierController(req: Request, res: Response) {
    try {
      const suplierId = req.params.id;
      const { nama, kontak } = req.body;

      const Suplier = await editSuplierService({
        suplierId: Number(suplierId),
        namaSuplier: nama,
        kontak: kontak,
      });

      res.status(200).send(Suplier);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
