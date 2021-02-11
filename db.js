import mongoose from "mongoose";
import dotenv from "dotenv";

import "./model/Content";
import "./model/Comment";
import "./model/User";

dotenv.config();

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`🚀Successfully connected to mongodb!`))
  .catch((e) => console.error(e));

const db = mongoose.connection;

export default db;
