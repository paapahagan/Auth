// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlnDkLusRKEg22hRPgbaIflea7688KfuQ",
  authDomain: "login-auth-d513c.firebaseapp.com",
  projectId: "login-auth-d513c",
  storageBucket: "login-auth-d513c.appspot.com",
  messagingSenderId: "599722188382",
  appId: "1:599722188382:web:79e22e2266033b8e229ecf",
  measurementId: "G-XX2PK5L04K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//initialize firebase authentication and get reference to the service
export const auth = getAuth(app);
