import { BadRequestError, NotFoundError } from "../error/HttpError";
import { prisma } from "../prisma/prisma.db";
import { ProductCreateDto, ProductUpdateDto } from "./dto/product.dto";

export class ProductService {
  async findAll() {
    return prisma.products.findMany();
  }

  async findByCategory(cate_id: number) {
    return prisma.products.findMany({ where: { category_id: cate_id } });
  }

  async findOne(id: number) {
    const product = await prisma.products.findUnique({ where: { id: id } });
    if (!product) throw new NotFoundError("Product not found !");
    return product;
  }

  async create(data: ProductCreateDto) {
    const product = await prisma.products.findFirst({
      where: { name: data.name },
    });

    if (product) throw new BadRequestError("Product has already existed!");
    const newPro = await prisma.products.create({
      data: {
        name: data.name,
        category_id: data.category_id,
        description: data.description,
        base_price: data.base_price,
        created_at: new Date(),
      },
    });
    return newPro;
  }

  async update(data: ProductUpdateDto) {
    const product = await prisma.products.findUnique({
      where: { id: data.id },
    });
    if (!product) throw new NotFoundError("Product not found !");
    const { id, ...updatedData } = data;
    const updatedPro = await prisma.products.update({
      where: { id: id },
      data: {
        ...updatedData,
        updated_at: new Date(),
      },
    });
    return updatedPro;
  }

  async delete(id: number) {
    const product = await prisma.products.findUnique({
      where: { id: id },
    });
    if (!product) throw new NotFoundError("Product not found !");
    return prisma.products.delete({ where: { id: id } });
  }
}
