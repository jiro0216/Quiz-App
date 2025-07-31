// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6_d7goYXIdQAQZQF-JtA0NDe9nW7K6VU",
  authDomain: "jirotest-48b5c.firebaseapp.com",
  projectId: "jirotest-48b5c",
  storageBucket: "jirotest-48b5c.firebasestorage.app",
  messagingSenderId: "179563034271",
  appId: "1:179563034271:web:b7c1070f49404c0f0394aa",
  measurementId: "G-X4Y02XMDHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
