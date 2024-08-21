import mongoose from "mongoose";

const querySchema = mongoose.Schema({
  message: String,
});

export const Query = mongoose.model("Query", querySchema);
