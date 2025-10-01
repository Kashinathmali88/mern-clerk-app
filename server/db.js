import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/ClerkTest`);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Failed to connect", error);
  }
};
