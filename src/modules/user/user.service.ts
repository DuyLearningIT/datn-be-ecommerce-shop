import {
  BadRequestError,
  InternalServerError,
  InvalidCredentials,
  NotFoundError,
} from "../error/HttpError";
import { prisma } from "../prisma/prisma.db";
import {
  UserChangePasswordDto,
  UserCreateDto,
  UserLoginDto,
  UserUpdateDto,
} from "./dto/user.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users_role } from "../../generated/prisma/enums";

dotenv.config();

export class UserService {
  async findAll() {
    return prisma.users.findMany();
  }

  async findOne(id: number) {
    const check = await prisma.users.findUnique({
      where: { id: id },
      select: {
        id: true,
        email: true,
        user_profiles: true,
      },
    });
    if (!check) throw new NotFoundError("User not found !");
    return check;
  }

  async create(data: UserCreateDto) {
    const check = await prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (check) throw new BadRequestError("Email has already existed !");
    const newUser = await prisma.users.create({
      data: {
        email: data.email,
        hashed_password: await bcrypt.hash(data.password, 10),
        role: users_role.user,
        created_at: new Date(),
      },
    });
    const newProfile = await prisma.user_profiles.create({
      data: {
        user_id: newUser.id,
      },
    });
    return newUser;
  }

  async login(data: UserLoginDto) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
    const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

    if (!(JWT_EXPIRES_IN && JWT_SECRET_KEY))
      throw new InternalServerError("Missing variables in .env");

    const user = await prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!user)
      throw new InvalidCredentials("User doesn't exist, please try again !");

    if (!(await bcrypt.compare(data.password, user.hashed_password)))
      throw new InvalidCredentials("Password is wrong! Please try again !");

    return jwt.sign(
      { user_id: user.id, email: user.email },
      JWT_SECRET_KEY
      // { expiresIn: JWT_EXPIRES_IN }
    );
  }

  async changePassword(data: UserChangePasswordDto) {
    const user = await prisma.users.findUnique({ where: { id: data.id } });
    if (!user) throw new NotFoundError("User not found !");

    if (!(await bcrypt.compare(data.password, user.hashed_password)))
      throw new BadRequestError("Password is wrong! Please try again !");

    await prisma.users.update({
      where: {
        id: data.id,
      },
      data: {
        hashed_password: await bcrypt.hash(data.new_password, 10),
      },
    });
    return true;
  }

  async update(data: UserUpdateDto) {
    const userProfile = await prisma.user_profiles.findUnique({
      where: {
        user_id: data.user_id,
      },
    });
    if (!userProfile) throw new NotFoundError("User not found !");

    return prisma.user_profiles.update({
      where: {
        user_id: userProfile.user_id,
      },
      data: {
        full_name: data.full_name,
        address: data.address,
        phone_number: data.phone_number,
        avatar_url: data.avatar_url,
      },
    });
  }

  async delete(id: number) {
    const user = this.findOne(id);
    await prisma.user_profiles.delete({
      where: {
        user_id: id,
      },
    });
    await prisma.users.delete({
      where: {
        id: id,
      },
    });
    return true;
  }
}
