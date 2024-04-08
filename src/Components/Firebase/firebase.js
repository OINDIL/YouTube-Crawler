// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtu-vPTd_dCckkdsSimbzq2MC41B0dxw",
  authDomain: "crawler-418109.firebaseapp.com",
  projectId: "youtube-crawler-418109",
  storageBucket: "youtube-crawler-418109.appspot.com",
  messagingSenderId: "177602673070",
  appId: "1:177602673070:web:cb26e2acb69b79224a703f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)