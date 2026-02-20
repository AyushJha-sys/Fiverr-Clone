import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";

dotenv.config();

const app = express();

/* FIXED CORS CONFIGURATION */
app.use(cors({
  origin: [
    "https://fiverr-clone-81s74oaoy-ayushjha-sys-projects.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("API working");
});

app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});