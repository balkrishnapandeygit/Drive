# ☁️ Drive Cloud App

A full-stack cloud storage application that allows users to securely upload, manage, and access files using Cloudinary. The app focuses on authentication, security, and a clean, responsive user experience.

---

## 🚀 Features
- User registration and login with secure authentication
- File upload and storage using Cloudinary
- JWT-based authentication and authorization
- Password hashing using bcrypt
- Responsive and modern UI
- Secure session handling

---

## 🛠️ Tech Stack
**Frontend**
- EJS
- TailwindCSS
- Flowbite

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Cloud Storage**
- Cloudinary

**Authentication & Security**
- JWT (JSON Web Tokens)
- bcrypt

---

## 🧩 How It Works
1. Users can create an account and log in securely.
2. Authentication tokens (JWT) are generated and verified for protected routes.
3. Files are uploaded and stored securely on Cloudinary.
4. Metadata is managed using MongoDB.
5. Responsive UI ensures smooth usage across devices.

---

## 📂 Project Structure
├── controllers
├── routes
├── models
├── views
├── public
├── middleware
├── config
└── app.js

yaml
Copy code

---

## ⚙️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/your-username/drive-cloud-app.git
Install dependencies

bash
Copy code
npm install
