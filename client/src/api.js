/**
 * API configuration for the portfolio application
 * 
 * This file centralizes API URL configuration to make it easy to switch
 * between development and production environments.
 */

// The base URL for API requests
// In production, this should be updated to your Render backend URL
const API_URL = import.meta.env.PROD 
  ? 'https://sushashank-portfolio-api.onrender.com' // Replace with your actual Render backend URL after deployment
  : 'http://localhost:5000';

export default API_URL;
