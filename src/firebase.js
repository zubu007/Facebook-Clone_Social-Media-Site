// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCoIVtgK6ndhHt7kjr8cmgACn8XU2Daoo",
    authDomain: "social-media-892e4.firebaseapp.com",
    projectId: "social-media-892e4",
    storageBucket: "social-media-892e4.appspot.com",
    messagingSenderId: "1046958446790",
    appId: "1:1046958446790:web:e44cab2c2ab6eeb2491fc7",
    measurementId: "G-LDNN1P7T11"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db