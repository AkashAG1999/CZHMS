# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run server "cd BackEnd / npm run server"
To run frontend "npm run dev"

step: 1 Replace the actual Database url in BackEnd\config\db.js
step: 2 First You need to register the user if you need to make as admin ? & Move to you Mongo Db database and change the " is admin = true"
step: 3 Then copy the admin object Id and paste it in BackEnd\controllers\userCtrl.js -  getMessages AdminId (line - 138)
step: 4 Then again paste the Object Id in BackEnd\server.js - socket io (line - 44)

Now run the server again
And run the frontend

if any user logged in they move to user page
if admin logged in admin moved to Admin dashboard

