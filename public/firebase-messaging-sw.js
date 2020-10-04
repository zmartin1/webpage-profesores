importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.0/firebase-messaging.js');


var firebaseConfig = {
  apiKey: "AIzaSyDbL7Dzj9BssoqVzI_Bb4z6kobImwcEm7Q",
  authDomain: "aprendapp-23.firebaseapp.com",
  databaseURL: "https://aprendapp-23.firebaseio.com",
  projectId: "aprendapp-23",
  storageBucket: "aprendapp-23.appspot.com",
  messagingSenderId: "860982508491",
  appId: "1:860982508491:web:445324200da8ab63dfd44e",
  measurementId: "G-VHZHCE0FH5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();