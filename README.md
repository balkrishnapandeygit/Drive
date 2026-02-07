📁 AI Drive – Secure Cloud File Storage (Google Drive Clone)

A secure cloud-based file storage app built using Node.js, Express, MongoDB, Multer, EJS, JWT Authentication, and a modern UI inspired by Google Drive.

This app allows users to register, log in, upload files, view files, and manage storage securely.

📸 Screenshots

<img width="1600" height="743" alt="image" src="https://github.com/user-attachments/assets/15216a34-a4c6-4557-8a81-67b981b15932" />
<img width="1600" height="803" alt="image" src="https://github.com/user-attachments/assets/224fdeb3-5bc7-4273-93dc-76368348e744" />
<img width="1600" height="799" alt="image" src="https://github.com/user-attachments/assets/e6dd1256-ae4e-444b-bf15-f829cb46f450" />
<img width="1600" height="864" alt="image" src="https://github.com/user-attachments/assets/5014d10b-9831-4383-85a1-4e28e06f1de6" />
<img width="1341" height="793" alt="image" src="https://github.com/user-attachments/assets/fd186d81-e09a-40fa-88cd-4498412508fc" />







```bash

📂 Project Folder Structure
Drive/
│
├── config/               # DB connection, environment setup
│
├── models/               # MongoDB models (User, File)
│
├── routes/               # App routes (auth, file upload, dashboard)
│
├── views/                # EJS templates for UI
│
├── uploads/              # Uploaded user files (auto-generated)
│
├── app.js                # Main server entry point
│
├── .env                  # Environment variables
├── .gitignore
├── .gitattributes
├── package.json
└── package-lock.json
```

🚀 Features
🔐 User Authentication

Register

Login

JWT-based authentication

Password hashing using bcrypt

📤 File Upload System

Upload any type of file

Stored securely using Multer

Files linked to the user

Files preview available (if supported)

🗂️ User Dashboard

View uploaded files

See file name, size, upload date

Secure access control

🎨 UI Features

Clean Google-Drive–like interface

EJS templates

Modern dark UI

Fully responsive

🛠️ Tech Stack
Frontend

EJS (Server-rendered)

TailwindCSS / Custom CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

Multer (file uploads)

JWT Authentication

dotenv

⚙️ Installation & Setup
📌 1. Clone Repository
git clone https://github.com/your-username/drive-app.git
cd drive-app

📌 2. Install Backend Dependencies
npm install

📌 3. Add Your .env File

Create .env in root:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

📌 4. Start Server
npm start


Server runs at:

http://localhost:5000

📡 API Routes
🔐 Auth Routes
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login user
📤 File Routes
Method	Endpoint	Description
GET	/home	Dashboard
POST	/upload	Upload a file
🧩 How It Works (Simple Flow)

User logs in / registers

JWT token gets created

User uploads a file

Multer saves file → MongoDB stores metadata

Dashboard shows uploaded files

🛣️ Future Improvements

🔍 File Search

🗑️ Delete / Rename files

📦 Storage limit per user

☁️ Cloud bucket storage (AWS / Google Cloud)

🔐 2FA security

📎 Folder system

📜 License

This project is MIT Licensed.

⭐ Support

If you like this project, please ⭐ star the repository — it motivates me to build more cool apps!
