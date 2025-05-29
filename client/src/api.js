/**
 * API configuration for the portfolio application
 * 
 * This file centralizes API URL configuration to make it easy to switch
 * between development and production environments.
 */

// The base URL for API requests
// In production, this should be updated to your Firebase Cloud Functions URL
const API_URL = import.meta.env.PROD 
  ? 'https://us-central1-shashankreddy-portfolio.cloudfunctions.net/api' // Your actual Firebase Functions URL
  : 'http://localhost:5000';

export default API_URL;
