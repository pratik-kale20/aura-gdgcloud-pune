import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBKZCOx5O6x-7_lvJG3VFudJMjEy7DIgo8",
  authDomain: "gdg-cloud-pune.firebaseapp.com",
  projectId: "gdg-cloud-pune",
  storageBucket: "gdg-cloud-pune.appspot.com",
  messagingSenderId: "759500810714",
  appId: "1:759500810714:web:e33a2ee4eae17e913c78e3",
  measurementId: "G-D3B2KM9297"
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