import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { read } from "fs";

const productService = new ProductService();

export class ProductController {
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productService.findAll();
      return res.status(200).json({
        message: "Get all products successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getProductByID(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = await productService.findOne(id);
      return res.status(200).json({
        message: "Get a product successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getProductByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = await productService.findByCategory(id);
      return res.status(200).json({
        message: "Get products by category successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const createProductDto = req.body;
      const data = await productService.create(createProductDto);
      return res.status(201).json({
        message: "Created a new product successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const updateProductDto = req.body;
      const data = await productService.update(updateProductDto);
      return res.status(200).json({
        message: "Updated a product successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await productService.delete(id);
      return res.status(204).json({
        message: "Deleted a product successfully !",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
