import { initializeApp } from "firebase/app"

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-HRzKT7_bx2gY8uhy4JbSV27p4WCBcwM",
  authDomain: "buenasvibras-learning.firebaseapp.com",
  projectId: "buenasvibras-learning",
  storageBucket: "buenasvibras-learning.appspot.com",
  messagingSenderId: "113215126133",
  appId: "1:113215126133:web:18f0de5b1158f7834c563c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)



export const firebaseConnections = () => app