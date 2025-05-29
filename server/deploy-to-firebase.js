#!/usr/bin/env node

/**
 * Script to deploy the backend to Firebase Cloud Functions
 * 
 * This script helps deploy your backend API to Firebase
 * It requires the Firebase CLI to be installed.
 * 
 * Usage:
 * 1. Install Firebase CLI: npm install -g firebase-tools
 * 2. Login to Firebase: firebase login
 * 3. Run this script: node deploy-to-firebase.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}Starting deployment to Firebase Cloud Functions...${colors.reset}`);

try {
  // Check if Firebase CLI is installed
  try {
    execSync('firebase --version', { stdio: 'ignore' });
  } catch (error) {
    console.log(`${colors.yellow}Firebase CLI not found. Please install it with:${colors.reset}`);
    console.log(`npm install -g firebase-tools`);
    process.exit(1);
  }

  // Check if user is logged in to Firebase
  try {
    execSync('firebase projects:list', { stdio: 'ignore' });
  } catch (error) {
    console.log(`${colors.yellow}You need to log in to Firebase first. Run:${colors.reset}`);
    console.log(`firebase login`);
    process.exit(1);
  }

  // Check if firebase.json exists
  const firebaseJsonPath = path.join(__dirname, 'firebase.json');
  if (!fs.existsSync(firebaseJsonPath)) {
    console.log(`${colors.red}Error: firebase.json not found in ${__dirname}${colors.reset}`);
    process.exit(1);
  }

  // Deploy to Firebase
  console.log(`${colors.green}Deploying to Firebase Cloud Functions...${colors.reset}`);
  execSync('firebase deploy --only functions', { stdio: 'inherit' });

  console.log(`${colors.green}Deployment complete!${colors.reset}`);
  console.log(`${colors.blue}Your API is now available at: https://us-central1-[YOUR-PROJECT-ID].cloudfunctions.net/api${colors.reset}`);
  console.log(`${colors.blue}Replace [YOUR-PROJECT-ID] with your Firebase project ID from .firebaserc${colors.reset}`);
  
  // Provide instructions for updating the frontend
  console.log(`\n${colors.yellow}Next steps:${colors.reset}`);
  console.log(`1. Update your frontend API URL in client/src/api.js with your Firebase Functions URL`);
  console.log(`2. Redeploy your frontend to Netlify`);

} catch (error) {
  console.error(`${colors.red}Deployment failed:${colors.reset}`, error.message);
  process.exit(1);
}
