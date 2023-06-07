import React from 'react';
import './App.css';
import Start from "./Pages/Start.js";
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Certification from './Pages/Certification';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Start/>}/>
        </Routes>
        <Header/>
        
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/certification' element={<Certification/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contactme' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
