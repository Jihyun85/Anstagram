import dotenv from "dotenv";
import app from "./app";
import db from "./db";

dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListening = () =>
  console.log(`🌞Listening: http://localhost:${process.env.PORT}`);

app.listen(PORT, handleListening);
