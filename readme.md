# 🏙️ Civic Issue Reporting Platform

A full-stack web application that empowers citizens to report local issues in their city — such as road damage, garbage, or broken streetlights — and helps authorities take timely action. The platform supports real-time issue submissions, image uploads, and geolocation tagging to improve civic engagement and governance.

---

## ✨ Features

- 📍 Users can upload city issues with images, descriptions, and location
- 📌 Issues are displayed in both user profiles and city dashboards
- 📤 Reports are stored in MongoDB with proper city and user mappings
- 📬 Notification system to alert respective authorities (future scope)
- 🔐 User login/signup with secure authentication

---

## 🧰 Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | EJS, HTML, CSS         |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB with Mongoose  |
| Auth/File  | Passport.js, Multer    |
| Tooling    | Nodemon, uuid, Morgan  |

---

## 📦 Setup Locally

To run the project locally on your machine:

```bash
git clone https://github.com/Abhilash-Basarikatti/civic_development.git
cd civic_development
yarn install
yarn start

```

## 🎯 Learning & Purpose

This project was built with the goal of using technology for social good. It allowed me to apply core web development concepts like authentication, routing, session handling, and file uploads while also understanding how to manage a meaningful user experience through geolocation-based filtering and reporting. From a backend perspective, I gained hands-on experience integrating MongoDB with Mongoose, building a structured MVC-like Node.js application, and implementing secure authentication. It reflects how digital tools can be used to improve civic engagement and accountability.

