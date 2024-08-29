import mongoose from "mongoose";

const dbUrl = process.env.DATABASE_URL;

export const ConnectDB = async () => {
  await mongoose.connect({dbUrl});
  console.log("DB connected");
};
