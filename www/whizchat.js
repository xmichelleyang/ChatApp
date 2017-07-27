'use strict';

document.addEventListener("DOMContentLoaded", function (){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZRhPcqU6yD4oVs_ESr_ZEH_RCLIeqfoY",
    authDomain: "whizchat-8dc5e.firebaseapp.com",
    databaseURL: "https://whizchat-8dc5e.firebaseio.com",
    projectId: "whizchat-8dc5e",
    storageBucket: "whizchat-8dc5e.appspot.com",
    messagingSenderId: "731840600243"
  };
  firebase.initializeApp(config);

   
   var dataRef = firebase.database().ref("data");
   dataRef.push({
       name: "Michelle",
       message: "We are all slaves to entropy"
   });



});