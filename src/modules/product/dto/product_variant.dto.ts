export type CreateProductVariantDto = {
  product_id: number;
  price: number;
  stock_quantity: number;
  main_image_url?: string;
};

export type UpdateProductVariantDto = {
  id: number;
  product_id?: number;
  price?: number;
  stock_quantity?: number;
  main_image_url?: string;
};
