// Import required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import feedbackRoutes from './routes/feedback.js';

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: ['https://my-portfolio.windsurf.build', 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
let dbConnected = false;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MongoDB connection string not found in environment variables');
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
    dbConnected = true;
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    console.log('Server will run without database functionality.');
    dbConnected = false;
  }
};

// Attempt to connect to MongoDB
connectDB();

// API Routes
app.get('/api', (req, res) => {
  res.json({ 
    status: 'API is running...', 
    dbConnected,
    endpoints: [
      'GET /api',
      'POST /api/feedback'
    ]
  });
});

// Feedback routes
app.use('/api/feedback', feedbackRoutes);

// 404 handler for /api/* routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'API endpoint not found',
    path: req.originalUrl
  });
});

// Export the Express app as a Cloud Function
export const api = onRequest(app);

// For Vercel, we'll also export the Express app directly
// This allows both Vercel and direct usage
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
