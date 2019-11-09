import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Story from './Story.js';
import LinkCards from './LinkCards.js';
import Banner from './Banner.js';
import Footer from './Footer.js';

function Home() {
    
  return (
    <div className="p-0 m-0">
     <Navbar/>
     <Header/>
     <Story/>
     <LinkCards/>
     <Banner/>
    </div>
  );
}

export default Home;
