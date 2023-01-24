import React from "react";
import Navbar from "./Components/NavBar/Navbar";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/about";
import Login from "./pages/login";
import './App.css';
import Catalog from "./pages/catalog";
import Shop from "./pages/shop";


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Router>

        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path ='/about' element={<About/>}/>
          <Route path ='/catalog' element={<Catalog/>}/>
          <Route path = '/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    
    </div>
    <div className="footer">
      Hello this is a footer and I want to check the alignment
    </div>
    </>
  )
}



export default App