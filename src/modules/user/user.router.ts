import Router from "express";
import { UserController } from "./user.controller";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/create", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.patch("/changePassword", userController.changePassword);
userRouter.patch("/", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);


export default userRouter;