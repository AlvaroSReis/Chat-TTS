// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ouLAGJmzC-TrY659zJeixh2Kta4YgZI",
  authDomain: "chat-tts--auth.firebaseapp.com",
  projectId: "chat-tts--auth",
  storageBucket: "chat-tts--auth.appspot.com",
  messagingSenderId: "826522083669",
  appId: "1:826522083669:web:e6138c9d6dac554d6b4fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

const auth = getAuth();

const singInGoogle = () => {
  signInWithRedirect(auth, provider)
}

export default singInGoogle;

