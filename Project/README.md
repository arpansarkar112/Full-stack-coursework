**Project README**

## 📂 Repository Structure
In this git repository, you will find the following required materials:
1. **Material from exercise projects:** Code and assignments completed during the course modules.
2. **Learning Diary:** Documentation of the learning process, architectural decisions, and technical challenges overcome during development.
3. **Project:** The main full-stack MERN application codebase (located in the `Project/` folder).
4. **ReadME:** This file, detailing the system architecture and instructions on how to run the project.
5. **Video Link:** A file containing a link to a video demonstration of the project running and its core features.

- **Purpose:**: Building MERN app for tracking job applications.

## System Architecture
This application utilizes a decoupled client-server architecture built on the **MERN** stack, which is integrated via a unified build process for production deployment.
* **Backend:** follows the **MVC (Model-View-Controller)** design pattern using Node.js and Express. It utilizes Mongoose for data modeling and securely stores user credentials and application data in MongoDB Atlas.
* **Frontend:** A modern, fast React client built with Vite. It implements **Redux Toolkit** for centralized, predictable global state management, completely separating API service logic from UI components.

## Key Features
* **Secure Authentication:** User registration and login utilizing encrypted JSON Web Tokens (JWT) and Bcrypt password hashing.
* **Protected Routes:** Custom Express middleware to verify token authorization, ensuring users can only interact with their own private database records.
* **CRUD Operations:** Full capability to Create, Read, Update, and Delete job applications dynamically without page reloads.
* **Centralized State:** Client-side caching and state synchronization using Redux `createAsyncThunk`.
* **Unified Deployment:** Configured to serve the static frontend build directly from the Express server in production environments.

## Technologies Used
**Frontend:**
* React (via Vite)
* Redux Toolkit & React-Redux
* React Router DOM
* Axios (HTTP Client)
* React-Toastify (Notifications)

**Backend:**
* Node.js & Express.js
* MongoDB Atlas & Mongoose
* JSON Web Token (JWT)
* Bcrypt.js
* Express-Async-Handler

**Environment Variables**
- **JWT_SECRET:**: secret used to sign JWTs.
- **MONGO_URI:**: MongoDB connection string (use Atlas URI or local).

**Local Development (single command)**
- Install dependencies and run both server + client in dev mode:

  ```bash
  npm run dev
  ```

- What `dev` does:
  - Runs the backend with `nodemon` (auto-restart).
  - Runs the frontend Vite dev server.

**Run Backend Only (development)**

```bash
npm install
npm run server
```

**Run Frontend Only (development)**

```bash
npm install --prefix frontend
npm run dev --prefix frontend
```

**Build for Production (local test)**

```bash
npm run build
```

This `build` script performs:
- `npm install` (backend deps)
- `npm install --prefix frontend` (frontend deps)
- `npm run build --prefix frontend` (creates `frontend/dist`)

**Run Production Locally**
- Ensure `.env` is set and `NODE_ENV=production`.
- Start the server which serves the frontend build and APIs:

```bash
npm start
```

This runs `node server.js` (see [server.js](server.js)).

**Useful Commands**
- **Install all deps:** `npm install`
- **Install frontend deps:** `npm install --prefix frontend`
- **Start (production):** `npm start`
- **Dev (both):** `npm run dev`
- **Build:** `npm run build`


**Live Deployment**
The application is live and fully functional. You can access the deployed Job Tracker here:
https://mern-app-server-h20q.onrender.com
