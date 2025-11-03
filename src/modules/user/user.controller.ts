import { UserService } from "./user.service";
import { NextFunction, type Request, type Response } from "express";

const userService = new UserService();
export class UserController {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.findAll();
      return res.status(200).json({
        message: "Get all users successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user_id = Number(req.params.id);
      const data = await userService.findOne(user_id);
      return res.status(200).json({
        message: "Get an user by id successfully !",
        data: data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userDto = req.body;
      const newUser = await userService.create(userDto);
      return res.status(201).json({
        message: "Created a new user successfully !",
        data: newUser,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const loginData = req.body;
      const token = await userService.login(loginData);
      return res.status(200).json({
        message: "Login successfully",
        data: token,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const changePasswordDto = req.body;
      const newPasswordUser = await userService.changePassword(
        changePasswordDto
      );
      return res.status(200).json({
        message: "Change password successfully !",
        data: newPasswordUser,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userDto = req.body;
      const updatedUser = await userService.update(userDto);
      return res.status(200).json({
        message: "Updated user successfully !",
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user_id = Number(req.params.id);
      await userService.delete(user_id);
      return res.status(204).json({
        message: "Deleted user successfully !",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
