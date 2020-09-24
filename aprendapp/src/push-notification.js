import firebase from 'firebase';


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

export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
}


export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('user token:', token);
        
        return token;
    } catch (error) {
        console.error(error);
    }
}