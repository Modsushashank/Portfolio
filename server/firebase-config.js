// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM48dLGoiKAGuceI3ph6l2oyxn4bL05b0",
  authDomain: "shashankreddy-portfolio.firebaseapp.com",
  projectId: "shashankreddy-portfolio",
  storageBucket: "shashankreddy-portfolio.firebasestorage.app",
  messagingSenderId: "829714050197",
  appId: "1:829714050197:web:1b3765bd4e8f6c482bbf9c",
  measurementId: "G-ZF30L22LC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
// Analytics only works in browser environments, not in Node.js
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export default app;
