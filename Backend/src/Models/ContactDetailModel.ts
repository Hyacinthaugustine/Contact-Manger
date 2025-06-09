const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
});

const ContactModel = model("Contact", contactSchema);

module.exports = ContactModel;
