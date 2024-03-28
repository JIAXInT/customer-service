const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
var http = require("http").Server(app);
const io = require("socket.io")(http, { cors: true });

io.on("connection", function (socket) {
  socket.on("client message", function (msg) {
    io.emit("client message", msg);
    console.log("client message: " + msg);
  });

  socket.on("customer message", function (msg) {
    io.emit("customer message", msg);
    console.log("customer message: " + msg);
  });
});

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
