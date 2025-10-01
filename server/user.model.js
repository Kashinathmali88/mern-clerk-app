import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true }, // Clerk user ID
    email: { type: String, required: true },
    username: { type: String },
    role: { type: String, default: "user" }, // example: admin/user
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
