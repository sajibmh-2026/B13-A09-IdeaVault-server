# IdeaVault Server

Backend API server for IdeaVault — a startup idea sharing platform.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **Authentication:** JWT (httpOnly cookies) + Firebase Auth
- **Security:** CORS, cookie-parser

## Features
- User registration & login (Email/Password + Google)
- JWT token-based authentication with secure cookies
- CRUD operations for startup ideas
- Comment system with ownership check
- Trending ideas using MongoDB aggregation pipeline `$limit`
- Search by title (case-insensitive `$regex`)
- Filter by category
- User profile management

## API Endpoints

### Auth (`/auth`)
| Method | Route | Description |
|---|---|---|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login with email & password |
| POST | `/auth/google-login` | Google OAuth login |
| POST | `/auth/logout` | Logout |

### Ideas (`/ideas`)
| Method | Route | Description |
|---|---|---|
| GET | `/ideas` | Get all ideas (search & filter) |
| GET | `/ideas/trending` | Get 6 trending ideas |
| GET | `/ideas/:id` | Get idea by ID |
| GET | `/ideas/user/:email` | Get ideas by user |
| POST | `/ideas` | Create new idea (🔒) |
| PUT | `/ideas/:id` | Update idea (🔒) |
| DELETE | `/ideas/:id` | Delete idea (🔒) |

### Comments (`/comments`)
| Method | Route | Description |
|---|---|---|
| GET | `/comments/:ideaId` | Get comments for an idea |
| GET | `/comments/user/:email` | Get user's comments |
| POST | `/comments` | Add comment (🔒) |
| PUT | `/comments/:id` | Update comment (🔒) |
| DELETE | `/comments/:id` | Delete comment (🔒) |

### Users (`/users`)
| Method | Route | Description |
|---|---|---|
| PUT | `/users/profile` | Update profile (🔒) |

🔒 = Protected route (requires JWT token)

## Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start server
node index.js
```

## Environment Variables
| Variable | Description |
|---|---|
| `DB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `PORT` | Server port (default: 5000) |
