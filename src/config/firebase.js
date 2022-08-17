import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBKh2dp5kpFyQrZ1H3kujfq4wRgtaJQHFs",
  authDomain: "gdgpune-4728d.firebaseapp.com",
  projectId: "gdgpune-4728d",
  storageBucket: "gdgpune-4728d.appspot.com",
  messagingSenderId: "736067899424",
  appId: "1:736067899424:web:494a1725227d592aae2c45",
  measurementId: "G-0XPWB173WL"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};