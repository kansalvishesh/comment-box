import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCaEtJKpAnFfCIlRQWyR4sDo8Takze7laI",
    authDomain: "shoocal-task.firebaseapp.com",
    databaseURL: "https://shoocal-task.firebaseio.com",
    projectId: "shoocal-task",
    storageBucket: "shoocal-task.appspot.com",
    messagingSenderId: "724810138622",
    appId: "1:724810138622:web:f17ca80ba7c099ade576af",
    measurementId: "G-ST5MMK6WVM"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;