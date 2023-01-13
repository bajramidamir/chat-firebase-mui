import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn1R6gaHUU_fpGyIH90mfKwCSbf7PhYEo",
    authDomain: "mui-chat-4f1e5.firebaseapp.com",
    projectId: "mui-chat-4f1e5",
    storageBucket: "mui-chat-4f1e5.appspot.com",
    messagingSenderId: "13331304428",
    appId: "1:13331304428:web:3b13866e139e57843e7ac9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }

