// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRa9rO6Yji9iSzvo54NBATi-tkn3dfUXc",
  authDomain: "website-b16b8.firebaseapp.com",
  projectId: "website-b16b8",
  storageBucket: "website-b16b8.appspot.com",
  messagingSenderId: "458845335605",
  appId: "1:458845335605:web:9b9c5fc0649a305697017c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();

export { auth,provider };
