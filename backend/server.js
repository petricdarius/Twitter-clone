//Packages
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

//Routes
import userRoutes from "./routes/user.rotes.js";
import dotenv from "dotenv";

//Utilities
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cookieParser()); // to get cookies put FIRST
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongoDB();
});
