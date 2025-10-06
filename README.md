# Admin Dashboard with Analytics & Reporting

## Overview
This project is an **Admin Dashboard with Analytics & Reporting**, built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with Tailwind CSS for styling.  
It demonstrates **role-based authentication**, **data visualization**, and **user management**, similar to professional CRM and analytics platforms.

---

## Features

### Authentication
- Secure login/logout with **JWT tokens**.
- Role-based access: Admin and Client users.
- Context API used for global state management.

### Dashboard
- Overview page for users after login.
- Admin sees additional metrics and management options.

### Analytics
- Real-time charts using **Chart.js**.
- Displays metrics like **user sign-ups** and other statistics.

### User Management
- Admin can view all registered users.
- Role and user information displayed in a table.

### Navigation
- Sidebar with buttons for **Dashboard**, **Analytics**, **Users**, **Settings**, and **Logout**.
- Seamless page switching without page reloads.

---

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT  
- **Charts:** Chart.js  

---
🗄️ 2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder and add:

MONGO_URI=mongodb+srv://<your-mongodb-connection-string>
JWT_SECRET=your-secret-key
PORT=5000


Start the backend server:

npm run dev


✅ Backend runs on → http://localhost:5000

💻 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


✅ Frontend runs on → http://localhost:5173

🧪 4️⃣ Test the App

Open http://localhost:5173 in your browser.

Register a new user (default: client).

For admin access, update the user’s role manually in MongoDB (role: "admin").

Login and explore Dashboard, Analytics, and Users sections.

📁 Folder Structure
project-root/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   └── utils/
    └── vite.config.js

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get JWT token
GET	/api/users	Fetch all users (Admin only)
GET	/api/analytics	Fetch analytics data (Admin only)
🧰 Troubleshooting
Issue	Solution
MongoDB Auth Error	Check your .env credentials or whitelist IP in Atlas (0.0.0.0/0 for dev).
Token not found / Login stuck	Clear browser localStorage and retry login.
CORS issue	Ensure backend CORS allows frontend origin (http://localhost:5173).
Port conflict	Change ports in .env (backend) or vite.config.js (frontend).
☁️ Deployment Instructions

Backend (Node + Express) → Use Render / Railway / Cyclic.

Add .env values in environment variables.

Frontend (React + Vite) → Deploy on Netlify / Vercel.

Run npm run build and upload /dist folder.

Database → Use MongoDB Atlas (set IP access to 0.0.0.0/0 for global access).

✨ Future Enhancements

Real-time analytics using WebSockets.

Complete CRUD for users and admin data.

Dark mode and theme customization.

Integration with third-party APIs and SSO login.

👨‍💻 Author

Mayank Singh
Software Developer
Singhmayank2702@gmail.com
