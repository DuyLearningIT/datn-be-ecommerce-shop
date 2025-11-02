import { BadRequestEror, NotFoundError } from "../error/HttpError";
import { prisma } from "../prisma/prisma.db";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto/category.dto";

export class CategoryService {
  // Get all categories
  async findAll() {
    return prisma.categories.findMany();
  }
  // Get category by id
  async findOne(id: number) {
    const check = await prisma.categories.findUnique({
      where: {
        id: id,
      },
    });
    if (!check) throw new NotFoundError("Category not found !");
    return prisma.categories.findUnique({
      where: {
        id: id,
      },
    });
  }
  // Create new category
  async create(data: CreateCategoryDto) {
    // Check exist
    const check = await prisma.categories.findFirst({
      where: {
        name: data.name,
      },
    });
    if (check) throw new BadRequestEror("Category name already exists !");
    return prisma.categories.create({
      data: {
        name: data.name,
        parent_category_id: data.parent_category_id,
        created_at: new Date(),
      },
    });
  }

  // Update category
  async update(data: UpdateCategoryDto) {
    const check = await prisma.categories.findUnique({
      where: {
        id: Number(data.id),
      },
    });
    if (!check) throw new NotFoundError("Category not found !");
    return prisma.categories.update({
      where: { id: data.id },
      data: {
        name: data.name,
        parent_category_id: data.parent_category_id,
        updated_at: new Date(),
      },
    });
  }
  // Delete category
  async delete(id: number) {
    const check = await prisma.categories.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!check) throw new NotFoundError("Category not found !");
    return prisma.categories.delete({
      where: {
        id: id,
      },
    });
  }
}
