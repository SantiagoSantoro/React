import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyC4c2wkWsvWIhlDPIDRAgtR6FRoGRYrGow",
  authDomain: "ecommerce-24336.firebaseapp.com",
  projectId: "ecommerce-24336",
  storageBucket: "ecommerce-24336.appspot.com",
  messagingSenderId: "25352714410",
  appId: "1:25352714410:web:d5e8753ef6cd5286f6b8d3"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

