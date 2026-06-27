# 🚀 IdeaVault – Startup Idea Sharing Platform

IdeaVault is a modern startup idea sharing platform where entrepreneurs, innovators, and creators can publish startup ideas, explore community ideas, and interact through comments and discussions.

## 🌐 Live Website

[https://ba13-a09-ideavault-client.vercel.app](https://ba13-a09-ideavault-client.vercel.app)

## 📂 Repositories

- **Client:** [BA13-A09-IdeaVault-client](https://github.com/sajibmh-2026/BA13-A09-IdeaVault-client)
- **Server:** [B13-A09-IdeaVault-server](https://github.com/sajibmh-2026/B13-A09-IdeaVault-server)

## ✨ Features

- 🔐 **JWT Authentication** – Secure login/register with Email & Google (Firebase)
- 💡 **CRUD for Ideas** – Create, read, update, and delete startup ideas
- 💬 **Comment System** – Add, edit, and delete comments on ideas
- 🔍 **Search & Filter** – Search ideas by title, filter by category
- 🌙 **Dark/Light Theme** – Toggle between themes with persistence
- 👤 **Profile Management** – Update name and photo
- 📊 **Trending Ideas** – Discover the latest ideas on the homepage
- 📱 **Fully Responsive** – Works on mobile, tablet, laptop, and desktop
- 🏷️ **Categories** – Browse ideas by industry category
- ❤️ **My Interactions** – See ideas you've commented on

## 🛠️ Technologies Used

### Client
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Axios
- React Hook Form
- Firebase Authentication
- React Hot Toast
- React Icons
- Swiper.js

### Server
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- Cookie Parser
- CORS
- Dotenv

## 🚀 Installation Guide

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Firebase project for authentication

### Server Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ideavault
JWT_SECRET=your_jwt_secret_key
```

```bash
npm run dev
```

### Client Setup
```bash
cd client
npm install
```

Create a `.env.local` file in the client directory:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

```bash
npm run dev
```

## 📦 Database Collections

| Collection  | Description                    |
|-------------|--------------------------------|
| `users`     | User accounts & profiles       |
| `ideas`     | Startup ideas with metadata    |
| `comments`  | User comments on ideas         |

## 📁 Project Structure

```
idea-vault/
├── client/                  # Next.js Frontend
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts (Auth, Theme)
│   │   └── services/        # Firebase & Axios config
│   └── public/              # Static assets
│
├── server/                  # Express.js Backend
│   ├── config/              # Database config
│   ├── controllers/         # Route handlers
│   ├── middlewares/          # JWT verification
│   ├── models/              # Mongoose schemas
│   └── routes/              # API routes
│
└── README.md
```

## 📄 License

This project is for educational purposes.
