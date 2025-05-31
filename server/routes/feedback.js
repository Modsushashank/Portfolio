const express = require('express');
const mongoose = require('mongoose');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Check if MongoDB is connected
const isDbConnected = () => mongoose.connection.readyState === 1;

// @route   POST /api/feedback
// @desc    Submit a new feedback
// @access  Public
router.post('/', async (req, res) => {
  // Check if MongoDB is connected
  if (!isDbConnected()) {
    return res.status(503).json({
      success: false,
      error: 'Database connection unavailable. Your feedback could not be saved.',
      dbStatus: 'disconnected'
    });
  }
  
  try {
    const { name, email, message } = req.body;
    
    const newFeedback = new Feedback({
      name,
      email,
      message
    });
    
    const savedFeedback = await newFeedback.save();
    
    res.status(201).json({
      success: true,
      data: savedFeedback,
      dbStatus: 'connected'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      dbStatus: 'connected'
    });
  }
});

// @route   GET /api/feedback
// @desc    Get all feedback
// @access  Public
router.get('/', async (req, res) => {
  // Check if MongoDB is connected
  if (!isDbConnected()) {
    return res.status(503).json({
      success: false,
      error: 'Database connection unavailable. Could not retrieve feedback.',
      dbStatus: 'disconnected',
      data: []
    });
  }
  
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback,
      dbStatus: 'connected'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      dbStatus: 'connected'
    });
  }
});

module.exports = router;
