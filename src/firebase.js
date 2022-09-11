import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID 
  };*/
  const firebaseConfig = {
    apiKey: "AIzaSyBLiyb2_zIqIC8sDGdqw_gF10Tw27r47R4",
    authDomain: "methods-production.firebaseapp.com",
    projectId: "methods-production",
    storageBucket: "methods-production.appspot.com",
    messagingSenderId: "412318029893",
    appId: "1:412318029893:web:977c8e6bea238984662b2c",
    measurementId: "G-SJT8NEH7WY"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export default app;
  const analytics = getAnalytics(app);

