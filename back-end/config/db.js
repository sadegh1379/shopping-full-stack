import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://akbarisadegh382:975193006@cluster0.ao8xp4d.mongodb.net/shopping"
    )
    .then(() => console.log("db connected"));
};
