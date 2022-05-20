// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4QVmBQDI9pFjMpTGXll4yHmRs1pT8rHI",
  authDomain: "fir-auth-website.firebaseapp.com",
  projectId: "fir-auth-website",
  storageBucket: "fir-auth-website.appspot.com",
  messagingSenderId: "405249539125",
  appId: "1:405249539125:web:fb312e9f0e1da391d7457c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;