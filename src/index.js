import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgAuN02xCuOJx-W40vGl86xFSaefqx6hQ",
  authDomain: "cart-702ea.firebaseapp.com",
  databaseURL: "https://cart-702ea.firebaseio.com",
  projectId: "cart-702ea",
  storageBucket: "cart-702ea.appspot.com",
  messagingSenderId: "679582416662",
  appId: "1:679582416662:web:bf612e2c49dbd0e372da37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
