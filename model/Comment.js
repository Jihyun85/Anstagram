import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Content",
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
