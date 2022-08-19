
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYDhJPcjBEjkmHv3m3yRZrgjvfA5eMAvE",
  authDomain: "realestate-app-2b65e.firebaseapp.com",
  projectId: "aston-waikiki-app",
  storageBucket: "realestate-app-2b65e.appspot.com",
  messagingSenderId: "705040630010",
  appId: "1:777591652856:ios:11aa312f6837cc620d560d",
  measurementId: "G-WG4LEKG3ST"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dv = getFireStore()