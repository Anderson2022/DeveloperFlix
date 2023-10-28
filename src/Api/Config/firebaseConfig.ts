// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwedqNk_6t4KKcsDJoQCyH2Mhzx0QS1fU",
  authDomain: "devflix-18183.firebaseapp.com",
  projectId: "devflix-18183",
  storageBucket: "devflix-18183.appspot.com",
  messagingSenderId: "260685281681",
  appId: "1:260685281681:web:49f9aa05f4d6011b3f8230",
  measurementId: "G-E2DVSSVTQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };