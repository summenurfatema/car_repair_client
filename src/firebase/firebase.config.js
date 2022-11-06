// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJuEQeZHZvc7O86nvaCIbXwUdQBRvfjwA",
    authDomain: "car-repair-client.firebaseapp.com",
    projectId: "car-repair-client",
    storageBucket: "car-repair-client.appspot.com",
    messagingSenderId: "28385602268",
    appId: "1:28385602268:web:35ec217b21b1720b14a219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;