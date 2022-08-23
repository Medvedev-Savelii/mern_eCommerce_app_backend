import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
//////////////////////////////////////////////////////////////////
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
//////////////////////////////////////////////////////////////////
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//route api
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

dotenv.config();
const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log(chalk.bgBlue("DB Connect")))
      .catch((err) => console.log(chalk.bgRed(err)));

    app.listen(process.env.PORT, (err) => {
      if (err) {
        return console.log(chalk.bgRed(err));
      }
      console.log(chalk.bgBlue(`Starting Server on port ${process.env.PORT}`));
    });
  } catch (error) {
    console.log(chalk.bgRed(error));
  }
};
start();
