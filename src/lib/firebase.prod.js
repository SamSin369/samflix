import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";
//seed data
//config here

const config = {
  apiKey: "AIzaSyABInA2-8SnRpvWjyM0dXuQ0u9t6svoEDw",
  authDomain: "netflix-demo-f49b6.firebaseapp.com",
  projectId: "netflix-demo-f49b6",
  storageBucket: "netflix-demo-f49b6.appspot.com",
  messagingSenderId: "815160178320",
  appId: "1:815160178320:web:d79cb69ddab98eadf80a15",
  measurementId: "G-R9V3P6P6X6",
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
export { firebase };
