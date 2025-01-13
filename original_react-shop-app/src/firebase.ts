// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
    // apiKey: "AIzaSyDdaZZS0C_0znR5Blag1Mi0ojd7Dun9LkI",
    // authDomain: "react-shop-app-13bce.firebaseapp.com",
    // projectId: "react-shop-app-13bce",
    // storageBucket: "react-shop-app-13bce.appspot.com",
    // messagingSenderId: "536056975865",
    // appId: "1:536056975865:web:1f113ac01e89e6c7b56d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;