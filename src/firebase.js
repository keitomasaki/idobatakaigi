import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0SfQTaVJCNUh-lXa3BNJJJ4z21_WSWBY",
  authDomain: "idobatakaigi-with-ham-a5b33.firebaseapp.com",
  databaseURL:
    "https://idobatakaigi-with-ham-a5b33-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-with-ham-a5b33",
  storageBucket: "idobatakaigi-with-ham-a5b33.appspot.com",
  messagingSenderId: "974693234578",
  appId: "1:974693234578:web:d5d4cd8e2e57e0b7b2334b",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
