import React from 'react';
import '../assets/css/Header.css';

function Header() {
  return (
  	<div id="carouselExampleIndicators" className="carousel slide p-0 m-0" data-ride="carousel">
	 
	  <div id="carousel-header" className="carousel-inner p-0 m-0 bg-dark">
	  <ol className="carousel-indicators p-0 m-0">
	    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	  </ol>
	    <div className="carousel-item p-0 m-0 flavor active">
	    	<div className="carousel-content align-middle">
	    		<h1>Scoop Shops</h1>
	    		<h4>BRINGING YOU SWEET AND FRUITY FUN WITH EVERY SCOOP</h4> 
	    		<a href="#" className="bg-paint">FIND YOUR FLAVOUR</a>
	    	</div>

	    </div>
	    <div className="carousel-item p-0 m-0 vegan">
	    	<div className="carousel-content align-middle">
	    		<h1>Scoop Shops</h1>
	    		<h4>BRINGING YOU SWEET AND FRUITY FUN WITH EVERY SCOOP</h4> 
	    		<a href="#" className="bg-paint">FIND YOUR FLAVOUR</a>
	    	</div>

	    </div>
	    <div className="carousel-item p-0 m-0 learn">
	    	<div className="carousel-content align-middle">
	    		<h1>Scoop Shops</h1>
	    		<h4>BRINGING YOU SWEET AND FRUITY FUN WITH EVERY SCOOP</h4> 
	    		<a href="#" className="bg-paint">FIND YOUR FLAVOUR</a>
	    	</div>

	    </div>
	  </div>
	</div>

  );
}

export default Header;



