import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", () => {
  void prisma.user
    .create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    })
    .catch((error) => {
      console.error("Failed to create user:", error);
    });

  console.log("Hi there you are connected to the WebSocket server!");
});
