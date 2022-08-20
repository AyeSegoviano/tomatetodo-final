import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCstINOKzos9hUOpHwSiybRgdZA1kdjqv8",
  authDomain: "tomatetodo-cocteleria.firebaseapp.com",
  projectId: "tomatetodo-cocteleria",
  storageBucket: "tomatetodo-cocteleria.appspot.com",
  messagingSenderId: "21625209207",
  appId: "1:21625209207:web:4750da2083f00d1b5ba172"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);