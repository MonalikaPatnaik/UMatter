// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_apiKey}`,
    authDomain: `${process.env.REACT_APP_authDomain}`,
    projectId: `${process.env.REACT_APP_projectId}`,
    storageBucket: `${process.env.REACT_APP_storageBucket}`,
    messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
    appId: `${process.env.REACT_APP_appId}`,
};

console.log("apiKey:", process.env.REACT_APP_apiKey);
console.log("authDomain:", process.env.REACT_APP_authDomain);
console.log("projectId:", process.env.REACT_APP_projectId);
console.log("storageBucket:", process.env.REACT_APP_storageBucket);
console.log("messagingSenderId:", process.env.REACT_APP_messagingSenderId);
console.log("appId:", process.env.REACT_APP_appId);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
