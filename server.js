const http = require("http");
const { Server } = require("socket.io");

// Create HTTP server
const server = http.createServer();

// Attach Socket.IO to HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sync", (data) => {
    socket.broadcast.emit("sync", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// IMPORTANT: listen on Render PORT
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

