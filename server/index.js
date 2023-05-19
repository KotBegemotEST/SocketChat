const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  },
});

// Middleware для обработки CORS
app.use(cors());

io.on("connection", (socket) => {
  console.log("У нас новое соединение.");
  socket.on("join", ({ name, room },callback) => {
    console.log(name, room);
    // const error = true;
    // if(error){
    //     callback({error: 'error'});
    // }

  });

  socket.on("disconnect", () => {
    console.log("Пользователь покинул");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
