import { Request, Response } from "express";
import { getProductsService } from "../services/products/getAllProducts.service";
import { getProductByIdService } from "../services/products/getProductById.service";
import { createProductService } from "../services/products/createProduct.service";
import { editProductService } from "../services/products/editProducts.service";
import { deleteProductService } from "../services/products/deleteProduct.service";

export class ProductsController {
async getAllProductsController(req: Request, res: Response){
  try {
    const { 
      category, 
      search,
      sortBy,
      order,
      page,
      pageSize,
      minPrice,
      maxPrice
    } = req.query;

    const result = await getProductsService({
      category: category as string,
      search: search as string,
      sortBy: sortBy as "nama" | "hargaJualRetail" | "stok",
      order: order as "asc" | "desc",
      page: page ? parseInt(page as string) : undefined,
      pageSize: pageSize ? parseInt(pageSize as string) : undefined,
      minPrice: minPrice ? parseFloat(minPrice as string) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice as string) : undefined
    });

    res.status(200).json(result);
  } catch (error : any) {
    console.error("Error in getProductsController:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
  async getProductById(req: Request, res: Response) {
    try {
      const ProductId = req.params;

      const Product = await getProductByIdService({
        id: Number(ProductId.id),
      });

      res.status(200).send(Product);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const { nama, kategoriId, hargaBeli, hargaJualRetail, hargaJualGrosir, qtyMinGrosir } = req.body;

      const ProductData = await createProductService({
        nama: nama,
        kategoriId: +kategoriId,
        hargaBeli: hargaBeli,
        hargaJualRetail: hargaJualRetail,
        hargaJualGrosir: hargaJualGrosir,
        qtyMinGrosir: qtyMinGrosir,
      });

      res.status(200).send(ProductData);
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
}

async editProductController(req: Request, res: Response) {
    try{
        const productId = req.params.id; 
        const { nama, kategoriId, hargaBeli, hargaJualRetail, hargaJualGrosir, qtyMinGrosir } = req.body;

        const ProductData = await editProductService({
            productId: Number(productId),
            nama: nama,
            kategoriId: kategoriId,
            hargaBeli: hargaBeli,
            hargaJualRetail: hargaJualRetail,
            hargaJualGrosir: hargaJualGrosir,
            qtyMinGrosir: qtyMinGrosir,
        });

        res.status(200).send(ProductData);
    }catch(err: any) {
        res.status(400).send({ message: err.message });
    }
}

async deleteProductController(req: Request, res: Response) {
    try {
        const productId = req.params.id; 
        if (!productId) throw new Error("tentukan id produk yang ingin dihapus");

        const Product = await deleteProductService({
            productId: Number(productId),
        });

        res.status(200).send(Product);
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
  }
}