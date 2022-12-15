import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import Raid from './Components/RaidPage'
import TrackerPage from './Components/TrackerPage';
import PathPage from './Components/PathPage';
import SelectMode from './Components/EFTSelectMode';
import JoinRaid from './Components/EFTJoin';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import App from './App'

import { Tags } from './Components/RaidTags';

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
    path: "/tempRaid",
    element: <Raid/>,
  },
  {
    path: "/Tracker",
    element: <TrackerPage/>,
  },
  {
    path: "/Paths",
    element: <PathPage/>
  },
  {
    path:"/SelectMode",
    element: <SelectMode/>
  },
  {
    path: "/JoinPlayer",
    element: <JoinRaid player={true}/>
  },
  {
    path: "/JoinSpectator",
    element: <JoinRaid player={false}/>
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