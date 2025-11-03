import { CategoryService } from "./category.service";
import { NextFunction, type Request, type Response } from "express";

const categoryService = new CategoryService();

export class CategoryController {
  // Get all
  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.findAll();
      return res.status(200).json({
        message: "Get all categories successfully !",
        data: data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  // Get one
  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.findOne(Number(req.params.id));
      return res.status(200).json({
        message: "Get category successfully !",
        data: data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  // Create one
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newCate = await categoryService.create(data);
      return res.status(201).json({
        message: "Created category successfully !",
        data: newCate,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  // Update one
  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const updatedCate = await categoryService.update(data);
      return res.status(200).json({
        message: "Updated category successfully !",
        data: updatedCate,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  // Delete one
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await categoryService.delete(id);
      return res.status(204).json({
        message: "Deleted category successfully !",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
