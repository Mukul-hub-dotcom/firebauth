import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCI7XR7Hxd5Z6BmbbUY_-j1WfPjFynMQQg",
  authDomain: "authenticator-ae95d.firebaseapp.com",
  projectId: "authenticator-ae95d",
  storageBucket: "authenticator-ae95d.appspot.com",
  messagingSenderId: "374716857681",
  appId: "1:374716857681:web:20e853de07d5d2fc5b6770",
  measurementId: "G-KJSL3WT871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
