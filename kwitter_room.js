

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAj0NqVttT9uesAHAwWXaRT8O-ml3-9fL8",
  authDomain: "kwitter-app-51449.firebaseapp.com",
  databaseURL: "https://kwitter-app-51449-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-51449",
  storageBucket: "kwitter-app-51449.appspot.com",
  messagingSenderId: "106670816327",
  appId: "1:106670816327:web:77dec28d9bbf25d347c562"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name;

  function addroom() 
  { 
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
     }
      function getData() 
      {
         firebase.database().ref("/").on('value', function(snapshot) 
         { document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
            Room_names = childKey; console.log("Room Name - " + Room_names); 
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData(); 
   
   



function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name)
window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}

