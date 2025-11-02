export type CreateCategoryDto = {
  name: string;
  parent_category_id?: number;
};

export type UpdateCategoryDto = {
  id: number;
  name?: string;
  parent_category_id?: number;
};
