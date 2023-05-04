// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxHVCTw_NXnuHoI3tf_XPcGhLJ33ZAumY",
  authDomain: "chef-recepie-hunter.firebaseapp.com",
  projectId: "chef-recepie-hunter",
  storageBucket: "chef-recepie-hunter.appspot.com",
  messagingSenderId: "558139380950",
  appId: "1:558139380950:web:6abcf4aff0e8e3b3862577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;