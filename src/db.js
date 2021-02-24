import mongoose from "mongoose";
import dotenv from "dotenv";

import "./model/Content";
import "./model/Comment";
import "./model/User";

dotenv.config();

mongoose.Promise = global.Promise;

mongoose
  .connect(
    process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log(`🚀Successfully connected to mongodb!`))
  .catch((e) => console.error(e));

const db = mongoose.connection;

export default db;
