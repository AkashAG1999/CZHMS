React + Vite
How to Run the Application
Backend:
Navigate to the backend directory: cd BackEnd.
Start the server: npm run server.
Frontend:
Start the development server: npm run dev.
Setup Instructions
Step 1: Database Configuration
Replace the placeholder Database URL in BackEnd/config/db.js with your actual Database URL.

Step 2: User Registration and Admin Setup
Register a new user through the application.
In your MongoDB database, find the newly registered user and update the isAdmin field to true to grant admin privileges.
Step 3: Admin Object ID Configuration
Copy the Object ID of the admin user from your MongoDB database.
Paste this Object ID into the following files:
BackEnd/controllers/userCtrl.js - Replace the Admin ID in the getMessages function (line 138).
BackEnd/server.js - Update the Admin ID for Socket.io (line 44).
Running the Application
Restart the backend server: npm run server.
Start the frontend development server: npm run dev.
Usage
When a user logs in, they will be redirected to the user page.
When an admin logs in, they will be redirected to the admin dashboard.