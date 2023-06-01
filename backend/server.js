require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("serer has been started");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

let PORT = process.env.PORT || 5000;

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
);

// --------------------------deployment------------------------------

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
