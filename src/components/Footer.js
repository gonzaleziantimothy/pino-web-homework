import React from 'react';
import '../assets/css/Footer.css';

function Footer() {
  return (
  	<footer id="footer-div">
  		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-4 px-0 m-0 row">
	  		<div className="col-md-3">
	  		</div>
	   
  			<ul id="navbarlist" className="navbar-nav col-md-6 d-flex justify-content-around">
		      <li className="nav-item active">
		        <a className="nav-link  border-bottom border-danger" href="#">HOME<span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">ABOUT</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">FLAVOURS</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">DISCOVER</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">CONTACT</a>
		      </li>
		    </ul>

		    <div id="faqBtn-div" className="col-md-3">
	    		<button className="btn mr-5">FAQ</button>
    		</div>
  		</nav>

  		<div className="footer-icons d-flex justify-content-center">
  			<div className="icon-div d-flex justify-content-center align-items-center">
  				<i className="far fa-envelope"></i>
  			</div>
  			<div className="icon-div d-flex justify-content-center align-items-center">
  				<i className="fab fa-facebook-f"></i>
  			</div>
  			<div className="icon-div d-flex justify-content-center align-items-center">
  				<i className="fab fa-instagram"></i>
  			</div>
  		</div>
  		<div className="footer-copyright text-center">
  			<p><small className="text-white">&copy; The Food People, Inc. 2018 - All rights reserved</small></p>
  		</div>
  	</footer>
  	
  );
}

export default Footer;