import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyAnvjUAlP-QW6M236C_9PdqHnfvdDffpCg',
    authDomain: 'ecommerce-easy-vue.firebaseapp.com',
    databaseURL: 'https://ecommerce-easy-vue-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'ecommerce-easy-vue',
    storageBucket: 'ecommerce-easy-vue.appspot.com',
    messagingSenderId: '404262635279',
    appId: '1:404262635279:web:f2eecd8d497b57e503a07a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
};