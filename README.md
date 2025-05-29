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
