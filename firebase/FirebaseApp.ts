// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6THNU6p-LbUiR1cgwaB3fR5UKr_7IpGc",
  authDomain: "react-twitter-clone-8a4f9.firebaseapp.com",
  projectId: "react-twitter-clone-8a4f9",
  storageBucket: "react-twitter-clone-8a4f9.appspot.com",
  messagingSenderId: "360336169765",
  appId: "1:360336169765:web:1c66c47cd72a62c7cbd8cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app
}