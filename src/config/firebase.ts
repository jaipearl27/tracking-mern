import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDag9HByXMeRl-NAojXotw0lr5lUSoy-2E",
    authDomain: "affiliate-8fad9.firebaseapp.com",
    projectId: "affiliate-8fad9",
    storageBucket: "affiliate-8fad9.appspot.com",
    messagingSenderId: "504112654086",
    appId: "1:504112654086:web:52804d74b3873f150de087",
    measurementId: "G-N0VXL0MDYE",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage, auth };
