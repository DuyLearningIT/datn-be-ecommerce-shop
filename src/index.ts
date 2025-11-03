import "dotenv/config";
import express, { type Request, type Response } from "express";
import categoryRouter from "./modules/category/category.router";
import userRouter from "./modules/user/user.router";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "WELCOME TO NQD_SHOP !" });
});

app.use(errorHandler);
app.listen(process.env.PORT || 8000, () => {
  console.log("BACKEND IS LISTENING AT PORT: ", process.env.PORT || 8000);
});
