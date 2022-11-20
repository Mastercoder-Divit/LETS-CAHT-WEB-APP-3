const firebaseConfig = {
    apiKey: "AIzaSyC_za1Hx5D8j48LPM-NlgkuAkQSYDR4lrk",
    authDomain: "kwitter-project-5a458.firebaseapp.com",
    databaseURL: "https://kwitter-project-5a458-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5a458",
    storageBucket: "kwitter-project-5a458.appspot.com",
    messagingSenderId: "292061934776",
    appId: "1:292061934776:web:4e91e191c820e72f98b04d",
    measurementId: "G-F74QQTHVNS"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML =  "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding_room_name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_Names);
      row = "<div class = 'room_name' id = " + Room_Names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_Names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_Names);
    row = "<div class = 'room_name' id = " + Room_Names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_Names + "</div><hr>";
    document.getElementById("output").innerHTML = row;
   });});}
getData();