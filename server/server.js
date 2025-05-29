import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import feedbackRoutes from './routes/feedback.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://shashankreddy:Shashi22@cluster0.pf1tu.mongodb.net/dup?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB Connected');
    dbConnected = true;
  } catch (err) {
    console.log('MongoDB Connection Error:', err.message);
    console.log('Server will run without database functionality.');
    console.log('To enable database features, please:');
    console.log('1. Make sure MongoDB is installed and running');
    console.log('2. Check that the connection string is correct in .env file');
    console.log('3. For local development, try using 127.0.0.1 instead of localhost');
    dbConnected = false;
  }
};

// Attempt to connect to MongoDB
connectDB();

// Routes
app.get('/api', (req, res) => {
  res.send('API is running...');
});

// Use routes
app.use('/api/feedback', feedbackRoutes);

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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
