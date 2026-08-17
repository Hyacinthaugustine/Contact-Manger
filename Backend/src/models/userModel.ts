import mongoose, { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password for your account"],
      trim: true,
      //   minLength: 8,
    },

    email: {
      type: String,
      required: [true, "Please provide the contact email"],
      trim: true,
      lowercase: true,
      unique: [true, "Email already taken"],
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
