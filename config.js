import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyCYshrqJBalLG934w-pRFzpT7j2cqer0AI",
    authDomain: "prjeot71.firebaseapp.com",
    projectId: "prjeot71",
    storageBucket: "prjeot71.appspot.com",
    messagingSenderId: "258316823196",
    appId: "1:258316823196:web:cdfd941bce40d4da12db59"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
