import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgCeo21uXk-wyqb7qwQHRsXIILfgHMwvU",
  authDomain: "abi-base.firebaseapp.com",
  projectId: "abi-base",
  storageBucket: "abi-base.appspot.com",
  messagingSenderId: "307974451023",
  appId: "1:307974451023:web:dddee68ea8c0731c7fdf3a",
  measurementId: "G-6V9TJND3WH"
};

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.error('Firebase initialization error:', error.stack);
    }
  }

  // const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();

export { storage, db};
