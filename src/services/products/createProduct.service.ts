import prisma from "../../prisma";

export interface CreateProductData {
  nama: string;
  kategoriId: number;
  hargaBeli: number;
  hargaJualRetail: number;
  hargaJualGrosir?: number;
  qtyMinGrosir?: number;
}

export const createProductService = async (productData: CreateProductData) => {
  try {

    if (!productData.nama) throw new Error("Nama produk harus diisi");
    if (!productData.kategoriId) throw new Error("Kategori harus dipilih");

    if (productData.hargaJualRetail <= productData.hargaBeli) {
      throw new Error("Harga jual retail harus lebih besar dari harga beli");
    }

    if (productData.hargaJualGrosir && productData.hargaJualGrosir >= productData.hargaJualRetail) {
      throw new Error("Harga grosir harus lebih murah dari harga retail");
    }

    if (!Number.isInteger(productData.hargaBeli) || !Number.isInteger(productData.hargaJualRetail) || (productData.hargaJualGrosir && !Number.isInteger(productData.hargaJualGrosir))) {
      throw new Error("Harga harus bilangan bulat");
    }

    const existingProduct = await prisma.produk.findFirst({
      where: { nama: productData.nama },
      include: {
        kategori: true,
      },
    });
    
    if (existingProduct && !existingProduct.isDeleted) {
      throw new Error("produk dengan nama ini sudah ada");
    }
    
    if (existingProduct && existingProduct.isDeleted) {
      const restored = await prisma.produk.update({
        where: { id: existingProduct.id },
        data: {
          isDeleted: false,
          deletedAt: null,
        },
      });
    
      return {
        message: "Produk di-restore",
        data: restored,
      };
    }
    const newProduct = await prisma.produk.create({
      data: {
        nama: productData.nama,
        kategoriId: productData.kategoriId,
        hargaBeli: productData.hargaBeli,
        hargaJualRetail: productData.hargaJualRetail,
        hargaJualGrosir: productData.hargaJualGrosir ?? 0,
        qtyMinGrosir: productData.qtyMinGrosir || 1,
      },
      include: {
        kategori: true,
      },
    });

    return newProduct;
  } catch (err) {
    console.error("Error in createProductService:", err);
    throw err instanceof Error ? err : new Error("Gagal membuat produk");
  }
};
