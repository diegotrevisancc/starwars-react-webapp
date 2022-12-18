import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhWEF5powLxkNyfr0jv30lBqK4z8eu6WM",
  authDomain: "starwars-dd056.firebaseapp.com",
  projectId: "starwars-dd056",
  storageBucket: "starwars-dd056.appspot.com",
  messagingSenderId: "845068002031",
  appId: "1:845068002031:web:48d243ccd439d8d9f9b11a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
