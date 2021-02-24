import mongoose, { Schema } from "mongoose";
import userRouter from "../router/userRouter";

const ContentSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  heartPerson: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now(),
  },
  description: String,
});

const model = mongoose.model("Content", ContentSchema);
export default model;
