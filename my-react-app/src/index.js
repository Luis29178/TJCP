import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SignUp from './signup';
import SignIn from './Components/SignIn'
import HomePage from './Components/HomePage';
import EFTmaps from './Components/EFTmaps';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
  authDomain: "capstone-eeab2.firebaseapp.com",
  projectId: "capstone-eeab2",
  storageBucket: "capstone-eeab2.appspot.com",
  messagingSenderId: "779758566575",
  appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
  measurementId: "G-55B1P13PP9"

};
firebase.initializeApp(config);

const router = createBrowserRouter([
 {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/login",
    element:<SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/EFT",
    element: <EFTmaps/>,
  },
  {
    path:"/test",
    element:<App/>
  }
  
  // to create a new path add an object like the below one to this Router.
  // "path" is that page path; ex: tjcp.com/login
  // "element" is the react component you want to redirect it to
  // {
  //   path:"/login",
  //   element:<div>Hello world!</div>,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();