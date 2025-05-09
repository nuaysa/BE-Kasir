import { Request, Response } from "express";
import { deleteCategoryService } from "../services/category/deleteCategory.service";
import { createCategoryService } from "../services/category/createCategory.service";
import { getAllCategoryService } from "../services/category/getAllCategory.service";
import { editCategoryService } from "../services/category/editCategory.service";

export class CategoryController {
  async getCategoryController(req: Request, res: Response) {
    try {
      const CategoryData = await getAllCategoryService();
      res.status(200).send(CategoryData);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async deleteCategoryController(req: Request, res: Response) {
    try {
      const categoryId = req.params.id;

      const CategoryData = await deleteCategoryService({
        categoryId: Number(categoryId),
      });

      res.status(200).send(CategoryData);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async createCategoryController(req: Request, res: Response) {
    try {
      const { nama, komisi } = req.body;
      const CategoryData = await createCategoryService({
        name: nama,
        komisi: komisi,
      });
      res.status(200).send(CategoryData);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async editCategoryController(req: Request, res: Response) {
    try {
      const categoryId = req.params.id;
      const { nama, komisi } = req.body;

      const CategoryData = await editCategoryService({
        categoryId: Number(categoryId),
        name: nama,
        komisi: komisi,
      });
      res.status(200).send(CategoryData);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
}
