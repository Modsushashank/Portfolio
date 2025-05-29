# Portfolio Backend API

This is the backend API for the portfolio website. It provides endpoints for feedback submission and retrieval.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Firebase Cloud Functions

## Deployment to Firebase

### Firebase Deployment Instructions

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Project**
   - Create a new project on the [Firebase Console](https://console.firebase.google.com/)
   - Set your project ID in `.firebaserc`

4. **Deploy to Firebase**
   ```bash
   firebase deploy --only functions
   ```
   
   Or use the provided deployment script:
   ```bash
   node deploy-to-firebase.js
   ```

5. **After Deployment**
   - Your API will be available at: `https://us-central1-[YOUR-PROJECT-ID].cloudfunctions.net/api`
   - Replace `[YOUR-PROJECT-ID]` with your Firebase project ID from `.firebaserc`

### Environment Variables

To set environment variables for your Firebase Functions:

1. Install Firebase Functions Config:
   ```bash
   npm install -g firebase-functions-config
   ```

2. Set your MongoDB connection string:
   ```bash
   firebase functions:config:set mongodb.uri="your_mongodb_connection_string"
   ```

3. Access in your code:
   ```javascript
   const mongoUri = functions.config().mongodb.uri;
   ```

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

After deploying your backend to Firebase, you'll get a URL for your API in this format:
`https://us-central1-[YOUR-PROJECT-ID].cloudfunctions.net/api`

Update the API URL in your frontend's `src/api.js` file:

```javascript
const API_URL = import.meta.env.PROD 
  ? 'https://us-central1-[YOUR-PROJECT-ID].cloudfunctions.net/api' // Replace with your actual Firebase Functions URL
  : 'http://localhost:5000';
```

Then redeploy your frontend to Netlify.

## Local Development with Firebase Functions

To test your Firebase Functions locally:

1. Install the Firebase Functions Emulator:
   ```bash
   npm install -g firebase-tools
   ```

2. Start the local emulator:
   ```bash
   firebase emulators:start
   ```

3. Your API will be available locally at: `http://localhost:5001/[YOUR-PROJECT-ID]/us-central1/api`
