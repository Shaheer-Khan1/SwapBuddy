import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase config from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDT38SZwkcnNcWsR7r10ro4vKnKdupXSJE",
  authDomain: "swapbuddy-6405d.firebaseapp.com",
  projectId: "swapbuddy-6405d",
  storageBucket: "swapbuddy-6405d.firebasestorage.app",
  messagingSenderId: "14732615704",
  appId: "1:14732615704:web:2b60fad85eec0b5c05a36d",
  measurementId: "G-M5EG6TLZSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
