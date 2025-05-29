#!/usr/bin/env node

/**
 * Script to deploy the backend to Render
 * 
 * This script helps deploy your backend API to Render.com
 * It requires the Render CLI to be installed.
 * 
 * Usage:
 * 1. Install Render CLI: npm install -g @render/cli
 * 2. Run this script: node deploy-to-render.js
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

console.log(`${colors.blue}Starting deployment to Render...${colors.reset}`);

try {
  // Check if render CLI is installed
  try {
    execSync('render --version', { stdio: 'ignore' });
  } catch (error) {
    console.log(`${colors.yellow}Render CLI not found. Please install it with:${colors.reset}`);
    console.log(`npm install -g @render/cli`);
    process.exit(1);
  }

  // Check if render.yaml exists
  const renderYamlPath = path.join(__dirname, 'render.yaml');
  if (!fs.existsSync(renderYamlPath)) {
    console.log(`${colors.red}Error: render.yaml not found in ${__dirname}${colors.reset}`);
    process.exit(1);
  }

  // Deploy to Render
  console.log(`${colors.green}Deploying to Render...${colors.reset}`);
  execSync('render deploy', { stdio: 'inherit' });

  console.log(`${colors.green}Deployment initiated! Check your Render dashboard for status.${colors.reset}`);
  console.log(`${colors.blue}Visit: https://dashboard.render.com${colors.reset}`);
  
  // Provide instructions for getting the API URL
  console.log(`\n${colors.yellow}After deployment completes:${colors.reset}`);
  console.log(`1. Go to your Render dashboard`);
  console.log(`2. Click on your 'sushashank-portfolio-api' service`);
  console.log(`3. Copy the URL (e.g., https://sushashank-portfolio-api.onrender.com)`);
  console.log(`4. Update your frontend code to use this URL for API calls`);

} catch (error) {
  console.error(`${colors.red}Deployment failed:${colors.reset}`, error.message);
  process.exit(1);
}
