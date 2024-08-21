import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  message: {
    type: "string",
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
