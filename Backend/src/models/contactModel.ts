import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide the contact email"],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide the contact phone number"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
