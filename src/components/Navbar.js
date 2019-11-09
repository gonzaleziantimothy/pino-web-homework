import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <nav id="nav" className="fixed-top navbar navbar-expand-lg navbar-dark bg-transparent d-flex justify-content-between pt-4">
	    <div>
		  <a className="navbar-brand" href="#">
		  	<img alt="Fruits In IceCream" 
		  		src="http://fruitsinicecream.com/wp-content/themes/fic/img/assets/brand-logo.png"
		  		className="logo"/>
		  </a>
	    </div>

		  <button className="navbar-toggler" 
		  			type="button" data-toggle="collapse" 
		  			data-target="#navbarSupportedContent" 
		  			aria-controls="navbarSupportedContent" 
		  			aria-expanded="false" 
		  			aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		 <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul id="navbarlist" className="navbar-nav mx-auto">
		      
		      <li className="nav-item active">
		        <Link to="/" className="nav-link" href="#">HOME<span className="sr-only">(current)</span></Link>
		      </li>
		    
		      <li className="nav-item">
		        <a className="nav-link" href="#">ABOUT</a>
		      </li>
		      <li className="nav-item">
		        <Link to="/flavours" className="nav-link" href="#">FLAVOURS</Link>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">DISCOVER</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">CONTACT</a>
		      </li>
		    </ul>
		 </div>

	    <div id="wheretobuyBtn-div">
	    	<button className="btn mr-5">WHERE TO BUY</button>
	    	<i className="fas fa-search fa-2x search-icon align-middle"></i>
    	</div>
	</nav>
  );
}

export default Navbar;


