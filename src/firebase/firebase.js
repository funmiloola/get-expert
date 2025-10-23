import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIbbMM6QV_5YoiD6K76QMHRYvu9kt4AV0",
  authDomain: "get-expert-ffc09.firebaseapp.com",
  projectId: "get-expert-ffc09",
  storageBucket: "get-expert-ffc09.firebasestorage.app",
  messagingSenderId: "794268704505",
  appId: "1:794268704505:web:5f5586f937ff6cc5a28c28",
  measurementId: "G-TSNJPQB8ZC"
};

 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

