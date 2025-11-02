import Router from "express";
import { CategoryController } from "./category.controller";

const categoryRouter = Router();
const controller = new CategoryController();

categoryRouter.get("/", controller.getAllCategories);
categoryRouter.get("/:id", controller.getCategory);
categoryRouter.post("/", controller.createCategory);
categoryRouter.patch("/", controller.updateCategory);
categoryRouter.delete("/:id", controller.deleteCategory);

export default categoryRouter;