// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyOcJf_NTR8TW_J3C0N3ekaTFKbssImeM",
  authDomain: "llfhwhwh.firebaseapp.com",
  projectId: "llfhwhwh",
  storageBucket: "llfhwhwh.firebasestorage.app",
  messagingSenderId: "732614041577",
  appId: "1:732614041577:web:94ac7b7798262fe594b578",
  measurementId: "G-VMR0HCQQPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };