export type CreateProductImageDto = {
  variant_id: number;
  image_url?: string;
  vector_db_id: string | "NguyenQuangDuy";
};

export type UpdateProductImageDto = {
  id: number;
  variant_id?: number;
  image_url?: string;
  vector_db_id?: string;
};
