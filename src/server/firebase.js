import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD20FXnBXavL1efgiZHlNlkojyGSA7eeVg", // Add API Key
  databaseURL:"https://console.firebase.google.com/u/0/project/meet-clone-a2be0/database/meet-clone-a2be0-default-rtdb/data/~2F" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
