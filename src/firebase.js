import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWWT0BU25eVsIguqTMyvr2EAQLM5aFRI8",
  authDomain: "controls-2022.firebaseapp.com",
  projectId: "controls-2022",
  storageBucket: "controls-2022.appspot.com",
  messagingSenderId: "839231663678",
  appId: "1:839231663678:web:1ade4a5403d081372ceb6f",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, serverTimestamp, collection, addDoc };
