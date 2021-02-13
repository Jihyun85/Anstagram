import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  displayName: String,
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

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
