import firebase from 'firebase/app';
import 'firebase/firestore' 
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5YiGxgBs3NKHNKO-xA7HW4MBicZ07rOE",
    authDomain: "react-redux-firebase-app-38ce5.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-38ce5.firebaseio.com",
    projectId: "react-redux-firebase-app-38ce5",
    storageBucket: "react-redux-firebase-app-38ce5.appspot.com",
    messagingSenderId: "660836806702",
    appId: "1:660836806702:web:88127835a739f855502fbf",
    measurementId: "G-EXCFYCXJG6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;