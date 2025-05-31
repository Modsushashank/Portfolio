# Portfolio Website

A modern portfolio website built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Navigation with the following sections:
  - Home
  - About Me
  - Projects
  - Skills
  - Contact
  - Resume
- Feedback form on the home page
- Backend API for storing feedback submissions

## Tech Stack

### Frontend
- React
- React Router
- CSS3
- Vite (for fast development and optimized builds)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## Deployment

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (for database)
- Render account (for deployment)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server Configuration
PORT=5001
NODE_ENV=production

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# CORS Origins (comma-separated)
ALLOWED_ORIGINS=https://your-frontend-domain.com,http://localhost:3000
```

### Deploying to Render

1. Push your code to a GitHub repository
2. Log in to your [Render](https://render.com) account
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Configure the following settings:
   - **Name**: portfolio (or your preferred name)
   - **Region**: Select the region closest to you
   - **Branch**: main (or your main branch)
   - **Build Command**: `npm install && cd client && npm install && npm run build`
   - **Start Command**: `npm start`
   - **Auto-Deploy**: Yes
6. Add your environment variables from the `.env` file
7. Click "Create Web Service"

### Frontend Deployment (Netlify)

The frontend is already deployed to Netlify. To update it:

1. Push your changes to the main branch
2. Netlify will automatically deploy the changes

### Environment Variables for Frontend

If you need to update environment variables for the frontend:

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" > "Build & deploy" > "Environment"
4. Add or update environment variables as needed
5. Trigger a new deploy

## Project Structure

```
portfolio-website/
├── client/               # Frontend React application
│   ├── public/           # Static files
│   └── src/              # React source code
│       ├── assets/       # Images, fonts, etc.
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       └── styles/       # CSS files
└── server/               # Backend Node.js/Express application
    ├── models/           # MongoDB models
    └── routes/           # API routes
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone <repository-url>
cd portfolio-website
```

2. Install frontend dependencies
```
cd client
npm install
```

3. Install backend dependencies
```
cd ../server
npm install
```

4. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### Running the Application

1. Start the backend server
```
cd server
npm run dev
```

2. Start the frontend development server
```
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

The frontend can be deployed to platforms like Netlify, Vercel, or GitHub Pages.
The backend can be deployed to platforms like Heroku, Render, or Railway.

## License

This project is licensed under the MIT License.
