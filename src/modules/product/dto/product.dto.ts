
export type ProductCreateDto = {
  category_id: number, 
  name: string, 
  description?: string,
  base_price: number
}

export type ProductUpdateDto = {
  id: number,
  name? : string, 
  description? : string, 
  base_price? : number
}
