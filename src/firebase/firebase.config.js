// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgskdHCXOwTcicKMKP7xwuytA4Q8sRIcA",
  authDomain: "my-task-a1630.firebaseapp.com",
  projectId: "my-task-a1630",
  storageBucket: "my-task-a1630.appspot.com",
  messagingSenderId: "586965211388",
  appId: "1:586965211388:web:5fa9e734059232b7c71f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;