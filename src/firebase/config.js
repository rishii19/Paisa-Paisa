import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuAYPGtizF55y_yDbX5YpHf8Zf0nlqusI",
    authDomain: "paisa-paisa-d3516.firebaseapp.com",
    projectId: "paisa-paisa-d3516",
    storageBucket: "paisa-paisa-d3516.appspot.com",
    messagingSenderId: "1027326611568",
    appId: "1:1027326611568:web:2f2487088508c9ee6e24b5",
    measurementId: "G-GM1B8ZVFLJ"
};

//init firebase 

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()

const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

//exporting the services

export { projectFirestore, projectAuth, timestamp }