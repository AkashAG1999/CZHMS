const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// Register new user
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({ message: "User Already Exists", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();

    res.status(201).send({ message: "Registered Successfully", success: true });
  } catch (error) {
    console.error("Error in Register Controller:", error);
    res.status(500).send({ message: `Register Controller Error: ${error.message}`, success: false });
  }
};

// Login user
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "User not found", success: false });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "Invalid Email or Password", success: false });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: "20d",
    });

    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.error("Error in Login Controller:", error);
    res.status(500).send({ message: `Login Controller Error: ${error.message}`, success: false });
  }
};

// Authenticate user
const authController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId).select('-password');
    if (!user) {
      return res.status(404).send({ message: "User not found", success: false });
    }

    res.status(200).send({ success: true, data: user });
  } catch (error) {
    console.error("Error in Auth Controller:", error);
    res.status(500).send({ message: `Auth Controller Error: ${error.message}`, success: false });
  }
};

// Get admin user
const getAdmin = async (req, res) => {
  try {
    const admin = await userModel.findOne({ isAdmin: true }).select('-password');
    if (!admin) {
      return res.status(404).send({ success: false, message: "Admin not found" });
    }

    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    console.error("Error fetching admin:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get non-admin users
const getUsers = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user || !user.isAdmin) {
      return res.status(401).send({ message: "Unauthorized access", success: false });
    }

    const users = await userModel.find({ isAdmin: false }).select('-password');

    res.status(200).send({ success: true, data: users });
  } catch (error) {
    console.error("Error in Get Users:", error);
    res.status(500).send({ message: `Get Users Error: ${error.message}`, success: false });
  }
};

// Send a message
const sendMessage = async (req, res) => {
  const { sender, receiver, message } = req.body;
  try {
    // Find sender and receiver users
    const senderUser = await userModel.findOne({ isAdmin: true, sender });
    const receiverUser = await userModel.findById(receiver);

    if (!senderUser || !receiverUser) {
      return res.status(404).send({ success: false, message: "Sender or Receiver not found" });
    }

    // Create a new message object
    const newMessage = {
      sender: senderUser._id,
      receiver: receiverUser._id,
      message,
      createdAt: new Date(),
    };

    // Add message to both sender and receiver
    senderUser.messages.push(newMessage);
    receiverUser.messages.push(newMessage);

    // Save both users
    await senderUser.save();
    await receiverUser.save();

    res.status(201).send({ success: true, data: newMessage });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send({ success: false, message: `Error sending message: ${error.message}` });
  }
};

// Get messages between two users
const getMessages = async (req, res) => {
  try {
    const { userId } = req.params;
    const adminId = '66828222340e38c80c02bbae'; // Use actual admin ID

    const user = await userModel.findById(userId).select('-password');
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    const messages = user.messages.filter(
      msg => (msg.sender.equals(userId) && msg.receiver.equals(adminId)) ||
        (msg.sender.equals(adminId) && msg.receiver.equals(userId))
    );

    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ success: false, message: "Error fetching messages" });
  }
};

module.exports = {
  loginController,
  registerController,
  authController,
  getAdmin,
  getUsers,
  sendMessage,
  getMessages
};
