import app from "./app";

const handleListening = () => console.log(`🌞Listening: http://localhost:4000`);

app.listen(3000, handleListening);
