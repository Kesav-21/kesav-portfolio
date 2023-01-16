import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Home from './Components/Home';
import Header from "./Components/Header";
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Certification from './Components/Certification';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/home",
    element:<Fragment>
      <Header/>
      <Home/>
      </Fragment>
  },
  {
    path:"/skills",
    element:<Fragment>
    <Header/>
    <Skills/>
    </Fragment>
  },
  {
    path:"/works",
    element:<Fragment>
    <Header/>
    <Works/>
    </Fragment>
  },
  {
    path:"/contactme",
    element:<Fragment>
    <Header/>
    <Contact/>
    </Fragment>
},
{
  path:"/certification",
  element:<Fragment>
  <Header/>
  <Certification/>
  </Fragment>
}
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />      
  </React.StrictMode>
);
