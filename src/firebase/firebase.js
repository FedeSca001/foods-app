import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
import { getAuth } from 'firebase/auth'
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBe8wAlP3CMAXsmapAZk7oFXbTnklEda6I",
  authDomain: "foods-app-vue3.firebaseapp.com",
  projectId: "foods-app-vue3",
  storageBucket: "foods-app-vue3.appspot.com",
  messagingSenderId: "233874870120",
  appId: "1:233874870120:web:05a5b352f10750649590dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const authService = firebase.auth();
const firestore = firebase.firestore();
const storage = getStorage();

export { auth, authService, firestore, storage, firebase }