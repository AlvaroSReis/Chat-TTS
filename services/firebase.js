import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB9ouLAGJmzC-TrY659zJeixh2Kta4YgZI",
  authDomain: "chat-tts--auth.firebaseapp.com",
  projectId: "chat-tts--auth",
  storageBucket: "chat-tts--auth.appspot.com",
  messagingSenderId: "826522083669",
  appId: "1:826522083669:web:e6138c9d6dac554d6b4fdc"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();



signInWithRedirect(auth, provider)

//Login result
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log('true')

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log('false')
  });
