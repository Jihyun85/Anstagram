import dotenv from "dotenv";
import app from "./app";
import db from "./db";

dotenv.config();

const handleListening = () =>
  console.log(`🌞Listening: http://localhost:${process.env.PORT}`);

app.listen(process.env.PORT, handleListening);
