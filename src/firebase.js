import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtchIwLSnVkco8KgaBvVrPUm46dao94Qw",
    authDomain: "clone-app-57ae4.firebaseapp.com",
    databaseURL: "https://clone-app-57ae4.firebaseio.com",
    projectId: "clone-app-57ae4",
    storageBucket: "clone-app-57ae4.appspot.com",
    messagingSenderId: "748185125092",
    appId: "1:748185125092:web:cbebfe65b06f5c1b7d2cf1",
    measurementId: "G-9YB2KNHB7P"
})


const auth = firebase.auth();


export { auth };