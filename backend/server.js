import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import { NotFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import morgan from "morgan";
dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/products/", productRoute);
app.use("/api", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoute);
app.get("/api/config/paypal", (req, res) => {
  console.log("client id ", process.env.PAYAL_CLIENT_ID);
  res.send(process.env.PAYAL_CLIENT_ID);
});

const __dirname = path.resolve();
console.log("DIR", __dirname);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/api", (req, res) => {
    res.send("Api running");
  });
}
app.use(NotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
