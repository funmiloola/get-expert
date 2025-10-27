import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
console.log({ apiKey: import.meta.env.VITE_API_KEY})
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "get-expert-ffc09.firebaseapp.com",
  projectId: "get-expert-ffc09",
  storageBucket: "get-expert-ffc09.firebasestorage.app",
  messagingSenderId: "794268704505",
  appId: import.meta.env.VITE_APP_ID,  
  measurementId:import.meta.env.VITE_APP_MEASUREMENT
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

