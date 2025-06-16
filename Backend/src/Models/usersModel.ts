import mongoose from "mongoose";
import { User } from "../types/user.types";

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
