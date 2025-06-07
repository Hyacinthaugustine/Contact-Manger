const mongoose = require("mongoose");
type User = import("../Types/user.types").User;

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);

module.exports = UserModel;
