import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID

  apiKey: "AIzaSyAhJLL83FM0YHuXjjO3B6Q27Tu8AknEH58",
  authDomain: "clinicaveterinariajoaquin.firebaseapp.com",
  databaseURL: "https://clinicaveterinariajoaquin.firebaseio.com",
  projectId: "clinicaveterinariajoaquin",
  storageBucket: "clinicaveterinariajoaquin.appspot.com",
  messagingSenderId: "18938073546",
  appId: "1:18938073546:web:bbfcd55067d7e9fcdbff33"

  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

export { database, auth, providers };
export default firebase;
