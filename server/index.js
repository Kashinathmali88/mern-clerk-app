import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { requireAuth } from "@clerk/express";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes.js";
import router from "./webhookHandler.js";
import { connectDB } from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
// app.use("/api/webhooks", router);
// app.use(express.json());

// Public route
app.get("/", (req, res) => {
  res.send("MERN + Clerk + Express API");
});

// Protected test route
app.get("/api/protected", requireAuth(), (req, res) => {
  res.json({ message: "Protected route working", auth: req.auth });
});

// connect DB first, then start server/
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
