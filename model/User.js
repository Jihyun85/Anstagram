import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema({
  email: String,
  name: {
    type: String,
    required: true,
  },
  profileUrl: String,
  kakaoId: String,
  googleId: String,
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  description: String,
  follow: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const model = mongoose.model("User", UserSchema);
