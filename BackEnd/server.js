const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userModel = require("./models/userModels");
const mongoose = require("mongoose");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use("/api/v1/user", require("./routes/userRoutes"));

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id) && new mongoose.Types.ObjectId(id).toString() === id;

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("sendMessage", async (data) => {
    console.log(`Message from ${data.sender} to ${data.receiver}: ${data.message}`);
    try {
      // Replace "admin" Replace admin ID
      const adminId = "6673bd0a976c1a27d7122e15";
      if (data.sender === "admin") {
        data.sender = adminId;
      }

      // Check if sender and receiver are valid ObjectIds
      if (!isValidObjectId(data.sender) || !isValidObjectId(data.receiver)) {
        console.error("Invalid sender or receiver ID");
        throw new Error("Invalid sender or receiver ID");
      }

      const senderId = new mongoose.Types.ObjectId(data.sender.trim());
      const receiverId = new mongoose.Types.ObjectId(data.receiver.trim());

      console.log(`Fetching sender with ID: ${data.sender}`);
      const senderUser = await userModel.findById(senderId);
      if (!senderUser) {
        console.error(`Sender not found with ID: ${data.sender}`);
        throw new Error("Sender not found");
      }

      console.log(`Fetching receiver with ID: ${data.receiver}`);
      const receiverUser = await userModel.findById(receiverId);
      if (!receiverUser) {
        console.error(`Receiver not found with ID: ${data.receiver}`);
        throw new Error("Receiver not found");
      }

      console.log("Both sender and receiver found, proceeding to save message.");
      const newMessage = {
        sender: senderId,
        receiver: receiverId,
        message: data.message,
        createdAt: new Date(),
      };

      senderUser.messages.push(newMessage);
      receiverUser.messages.push(newMessage);

      await senderUser.save();
      await receiverUser.save();

      console.log("Message saved successfully.");
      io.to(data.receiver).emit("receiveMessage", newMessage);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on("getMessages", async (data, callback) => {
    try {
      const { adminId, userId } = data;

      if (!isValidObjectId(adminId) || !isValidObjectId(userId)) {
        console.error("Invalid user IDs");
        throw new Error("Invalid user IDs");
      }

      const user = await userModel.findById(userId);
      if (!user) {
        console.error("User not found");
        throw new Error("User not found");
      }

      const messages = user.messages.filter(
        msg => (msg.sender.equals(userId) && msg.receiver.equals(adminId)) ||
          (msg.sender.equals(adminId) && msg.receiver.equals(userId))
      );

      callback(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      callback([]);
    }
  });

  socket.on("videoCall", (data) => {
    console.log(`Video call initiated from ${data.from} to ${data.to}`);
    io.to(data.to).emit("receiveVideoCall", data);
  });

  socket.on("answerCall", (data) => {
    console.log(`Video call answered by ${data.to}`);
    io.to(data.to).emit("callAnswered", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white
  );
});
