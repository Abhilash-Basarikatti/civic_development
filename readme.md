# 🏙️ Civic Issue Reporting Platform – MERN Stack Project

A full-stack web application that empowers citizens to report local issues in their city — such as road damage, garbage, or broken streetlights — and helps authorities take timely action. The platform supports real-time issue submissions, image uploads, geolocation tagging, and city-based filtering to improve civic engagement and governance.

---

## ✨ Features

- 📍 Users can upload city issues with images, descriptions, and location
- 🗂 Filter and search by city/district (predefined list of 30)
- 📌 Issues are displayed in both user profiles and city dashboards
- 📤 Reports are stored in MongoDB with proper city and user mappings
- 📬 Notification system to alert respective authorities (future scope)
- 🔐 User login/signup with secure authentication

---

## 🧰 Tech Stack

| Layer      | Technology           |
|------------|-----------------------|
| Frontend   | React.js, HTML, CSS   |
| Backend    | Node.js, Express.js   |
| Database   | MongoDB (with Mongoose) |

---

## 📦 Setup Locally

To run the project locally on your machine:

```bash
git clone https://github.com/Abhilash-Basarikatti/civic_development.git
cd civic_development
yarn install
yarn start
