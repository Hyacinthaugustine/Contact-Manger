import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.mdbAccessCode;

    if (!mongoURI) {
      throw new Error("MongoDB connection string is not defined");
    }

    const connect = await mongoose.connect(mongoURI);
    console.log(
      "Connection successful",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
