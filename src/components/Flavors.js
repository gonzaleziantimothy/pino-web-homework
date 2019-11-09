import React from 'react';
import Navbar from './Navbar.js';
import FlavorsHeader from './FlavorsHeader.js';
import FlavorsContainer from './FlavorsContainer.js';
import Footer from './Footer.js';


function Flavors() {
    
  return (
    <React.Fragment> 
     <FlavorsHeader/>
     <FlavorsContainer/>
    </React.Fragment>
  );
}

export default Flavors;
