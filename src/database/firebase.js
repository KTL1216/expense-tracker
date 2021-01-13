import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBcRI7ps8x7zPXfRDBO0LJxc14u0g64XKw",
    authDomain: "expense-tracker-c0c40.firebaseapp.com",
    projectId: "expense-tracker-c0c40",
    storageBucket: "expense-tracker-c0c40.appspot.com",
    messagingSenderId: "82757548707",
    appId: "1:82757548707:web:27a17a225dc0041c0b1d16"
};

firebase.initializeApp(firebaseConfig);

export default firebase;