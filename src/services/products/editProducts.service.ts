import prisma from "../../prisma";

interface editProductData {
  productId: number;
  nama?: string;
  kategoriId?: number;
  hargaBeli?: number;
  hargaJualRetail?: number;
  hargaJualGrosir?: number;
  qtyMinGrosir?: number;
  stok?: number;
}

export const editProductService = async (productData: editProductData) => {
  try {
    if (!productData.productId) throw new Error("tentukan id produk yang ingin diubah");

    if (!productData.hargaJualGrosir && !productData.qtyMinGrosir && !productData.stok && !productData.nama && !productData.kategoriId && !productData.hargaBeli && !productData.hargaJualRetail) {
      throw new Error("Isi data yang mau diedit");
    }
    if (typeof productData.hargaJualRetail !== "undefined" && typeof productData.hargaBeli !== "undefined" && productData.hargaJualRetail <= productData.hargaBeli) {
      throw new Error("Harga jual retail harus lebih besar dari harga beli");
    }

    const editedProduct = await prisma.produk.update({
      where: {
        id: productData.productId,
      },
      data: {
        nama: productData.nama,
        kategoriId: productData.kategoriId,
        hargaBeli: productData.hargaBeli,
        hargaJualRetail: productData.hargaJualRetail,
        hargaJualGrosir: productData.hargaJualGrosir,
        qtyMinGrosir: productData.qtyMinGrosir,
      },
    });
    return {
      message: "Produk berhasil diedit",
      data: editedProduct,
    };
  } catch (err) {
    console.error("Error in editProductService:", err);
    throw err instanceof Error ? err : new Error("Failed to edit product");
  }
};
