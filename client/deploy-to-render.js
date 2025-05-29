// Simple script to help deploy to Render
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Preparing for Render deployment...');

// Check if render.yaml exists
if (!fs.existsSync(path.join(__dirname, 'render.yaml'))) {
  console.error('render.yaml not found! Please make sure it exists in the project root.');
  process.exit(1);
}

// Make sure the build command works
console.log('Testing build command...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('\n=== Deployment Instructions ===');
console.log('1. Go to https://dashboard.render.com/');
console.log('2. Click "New" and select "Blueprint"');
console.log('3. Connect your GitHub/GitLab repository');
console.log('4. Render will automatically detect the render.yaml file');
console.log('5. Click "Apply" to deploy your site');
console.log('\nAlternatively, you can deploy manually:');
console.log('1. Go to https://dashboard.render.com/');
console.log('2. Click "New" and select "Static Site"');
console.log('3. Connect your repository');
console.log('4. Use these settings:');
console.log('   - Build Command: npm install && npm run build');
console.log('   - Publish Directory: dist');
console.log('\nYour site will be live in a few minutes after deployment!');
