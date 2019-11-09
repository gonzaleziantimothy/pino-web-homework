import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Flavors from './components/Flavors.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

function App() {
    
  return (
    <BrowserRouter>
    <div className="p-0 m-0">
     <Navbar/>
     <Route path="/" exact component={Home}/>
     <Route path="/flavours" exact component={Flavors}/>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
