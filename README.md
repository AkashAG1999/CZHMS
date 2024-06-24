# React + Vite

## How to Run the Application

### Backend:
1. Navigate to the backend directory: `cd BackEnd`.
2. Start the server: `npm run server`.

### Frontend:
1. Start the development server: `npm run dev`.

## Setup Instructions

### Step 1: Database Configuration
Replace the placeholder Database URL in `BackEnd/config/db.js` with your actual Database URL.

### Step 2: User Registration and Admin Setup
1. Register a new user through the application.
2. In your MongoDB database, find the newly registered user and update the `isAdmin` field to `true` to grant admin privileges.

### Step 3: Admin Object ID Configuration
1. Copy the Object ID of the admin user from your MongoDB database.
2. Paste this Object ID into the following files:
   - `BackEnd/controllers/userCtrl.js` - Replace the Admin ID in the `getMessages` function (line 138).
   - `BackEnd/server.js` - Update the Admin ID for Socket.io (line 44).

### Running the Application
1. Restart the backend server: `npm run server`.
2. Start the frontend development server: `npm run dev`.

### Usage
- When a user logs in, they will be redirected to the user page.
- When an admin logs in, they will be redirected to the admin dashboard.
