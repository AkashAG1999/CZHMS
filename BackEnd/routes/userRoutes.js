const express = require("express");
const {
  loginController,
  registerController,
  authController,
  getUsers,
  getAdmin,
  sendMessage,
  getMessages,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require('../config/multer');

const router = express.Router();

// Login route
router.post("/login", loginController);

// Register route
router.post("/register", registerController);

// Auth route (get user data)
router.post('/getUserData', authMiddleware, authController);

// Get all users (admin only)
router.get('/users', authMiddleware, getUsers);

// Get admin
router.get('/admin', authMiddleware, getAdmin);

// Send a message
router.post('/sendMessage', authMiddleware, sendMessage);

// Get messages between admin and a specific user
router.get('/getMessages/:userId', authMiddleware, getMessages);

module.exports = router;
