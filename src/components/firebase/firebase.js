import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAON_sg1ZcOcsxHPqqUverL5tk07LRwttM",
  authDomain: "mct-authfication.firebaseapp.com",
  projectId: "mct-authfication",
  storageBucket: "mct-authfication.appspot.com",

  messagingSenderId: "527479568256",
  appId: "1:527479568256:web:9279c42087e8e9e2dd7365",
  measurementId: "G-K7MK9ESG9W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth, analytics , app};