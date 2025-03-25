import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCC4Vh_1qAGiDe7yVBQuOfMXNHJ9Es4A6c",
  authDomain: "dragndrop-5271e.firebaseapp.com",
  projectId: "dragndrop-5271e",
  storageBucket: "dragndrop-5271e.firebasestorage.app",
  messagingSenderId: "823200087740",
  appId: "1:823200087740:web:065abad0397f1ac1315ab9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
