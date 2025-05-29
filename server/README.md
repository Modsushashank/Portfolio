# Portfolio Backend API

This is the backend API for the portfolio website. It provides endpoints for feedback submission and retrieval.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment to Render

### Manual Deployment (Recommended)

1. Create an account on [Render](https://render.com/) if you don't have one already
2. Click on "New" and select "Web Service"
3. Connect your GitHub repository or select "Deploy from existing repository"
4. Configure your web service:
   - Name: `sushashank-portfolio-api` (or any name you prefer)
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free
5. Add the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 10000 (Render will automatically set the PORT environment variable, but you can specify it here as well)
6. Click "Create Web Service"

### Using render.yaml (Alternative)

If you prefer to use the `render.yaml` file for deployment:

1. Go to the [Render Dashboard](https://dashboard.render.com/)
2. Click on "New" and select "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file and configure the services accordingly
5. Review the configuration and click "Apply"

## API Endpoints

- `GET /api`: Check if the API is running
- `GET /api/feedback`: Get all feedback entries
- `POST /api/feedback`: Submit a new feedback entry

## Local Development

1. Install dependencies: `npm install`
2. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the development server: `npm run dev`

## Connecting Frontend to Backend

After deploying your backend to Render, you'll get a URL for your API (e.g., `https://sushashank-portfolio-api.onrender.com`).

Update the API URL in your frontend's `src/api.js` file:

```javascript
const API_URL = import.meta.env.PROD 
  ? 'https://your-render-api-url.onrender.com' // Replace with your actual Render URL
  : 'http://localhost:5000';
```

Then redeploy your frontend to Netlify.
