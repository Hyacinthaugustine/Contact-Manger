import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DB_URI = process.env.mdbAccessCode as string;
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1);
  }
};
