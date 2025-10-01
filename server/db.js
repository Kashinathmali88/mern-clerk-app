import mongoose from "mongoose";

// export const connectDB = () => {
//   mongoose
//     .connect(`${process.env.MONGO_URI}/ClerkTest`)
//     .then(() => {
//       console.log("connectd to db");
//     })
//     .catch((err) => {
//       console.log(err);

//       console.log("failed to connect");
//     });
// };

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/ClerkTest`);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Failed to connect", error);
    process.exit(1);
  }
};
