// import mongoose from "mongoose";

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

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ClerkTest`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10 sec
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

// export default connectDB;
