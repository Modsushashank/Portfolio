/**
 * API configuration for the portfolio application
 * 
 * This file centralizes API URL configuration to make it easy to switch
 * between development and production environments.
 */

// The base URL for API requests
// In production, this points to Firebase Functions
// In development, it points to the local Firebase emulator
const API_URL = import.meta.env.PROD 
  ? 'https://us-central1-shashankreddy-portfolio.cloudfunctions.net/api' // Firebase Functions URL
  : 'http://localhost:5001/shashankreddy-portfolio/us-central1/api'; // Local emulator URL

export default API_URL;
