// Import the functions you need from the SDKs you need

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../services/FirebaseConnect";

const auth = getAuth(app);
const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

export default login;
