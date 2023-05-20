import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXtzE6elQhYKYnlOSGu_P84vC8IddX2y0",
  authDomain: "umatter-23703.firebaseapp.com",
  projectId: "umatter-23703",
  storageBucket: "umatter-23703.appspot.com",
  messagingSenderId: "97814917490",
  appId: "1:97814917490:web:24af27ad1a7c495be4edeb",
  measurementId: "G-Y0JDRSY0JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const db = getFirestore()
