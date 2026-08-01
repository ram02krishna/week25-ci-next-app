import express from "express";
import { prisma } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: { username: username, password: password },
  });
  res.json({ message: `User ${username} signed up successfully!` });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
