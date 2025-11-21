const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const os = require("os");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: { origin: "*" }
});

function getSystemMetrics() {
    const freeMem = os.freemem();
    const totalMem = os.totalmem();

    return {
        cpuLoad: os.loadavg()[0],
        memoryUsage: ((totalMem - freeMem) / totalMem * 100).toFixed(2),
        uptime: os.uptime(),
        processes: os.cpus().length * 120,   // dummy process count
        apiLatency: Math.floor(Math.random() * 150),
        errorRate: (Math.random() * 5).toFixed(2)
    };
}

io.on("connection", (socket) => {
    console.log("Client connected");

    setInterval(() => {
        socket.emit("metrics-update", getSystemMetrics());
    }, 1000);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
