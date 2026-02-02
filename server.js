const io = require("socket.io")(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("sync", (data) => {
    socket.broadcast.emit("sync", data);
  });
});
