// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getReactNativePersistence, setPersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from "firebase/auth";
import {getStorage} from "firebase/storage"
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVyf7LQmzL7kV9AbgSxCeMB2NvwUPq_Y8",
  authDomain: "gdse66-245b2.firebaseapp.com",
  projectId: "gdse66-245b2",
  storageBucket: "gdse66-245b2.appspot.com",
  messagingSenderId: "719071581499",
  appId: "1:719071581499:web:311f16d802713f345b931e",
  measurementId: "G-QM47FY4BEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
export const analytics = getAnalytics(app);


export const storage=getStorage(app)