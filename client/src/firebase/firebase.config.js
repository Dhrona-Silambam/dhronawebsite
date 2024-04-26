// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXJOw9MlxBjNmn7tB_1HYrKXAUyeI1740",
  authDomain: "my-own-web-ba6d6.firebaseapp.com",
  projectId: "my-own-web-ba6d6",
  storageBucket: "my-own-web-ba6d6.appspot.com",
  messagingSenderId: "907517954387",
  appId: "1:907517954387:web:2040b6574ab9f93c4079a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();

export { auth,provider };
