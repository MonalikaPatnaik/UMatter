// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: `${process.env.apiKey}`,
    authDomain: `${process.env.authDomain}`,
    projectId: `${process.env.projectId}`,
    storageBucket: `${process.env.storageBucket}`,
    messagingSenderId: `${process.env.messagingSenderId}`,
    appId: `${process.env.appId}`,
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
