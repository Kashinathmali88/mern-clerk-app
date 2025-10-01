import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}/ClerkTest`)
    .then(() => {
      console.log("connectd to db");
    })
    .catch((err) => {
      console.log(err);

      console.log("failed to connect");
    });
};
