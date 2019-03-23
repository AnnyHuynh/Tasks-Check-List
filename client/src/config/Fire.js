
import firebase from 'firebase';
  
  const config = {
    apiKey: "AIzaSyBgo0Y5fKJXFFjOL9yTXmqtVI9dBX9ozDY",
    authDomain: "tasks-check-list.firebaseapp.com",
    databaseURL: "https://tasks-check-list.firebaseio.com",
    projectId: "tasks-check-list",
    storageBucket: "tasks-check-list.appspot.com",
    messagingSenderId: "937302641765"
  };

  const fire = firebase.initializeApp(config);
  export default fire;