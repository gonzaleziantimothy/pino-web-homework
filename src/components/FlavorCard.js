import React from 'react';
import '../assets/css/Flavors.css';

function FlavorCard(props) {
	let style = {	backgroundImage: "url("+props.flavor.flavorImage+")",
					       height: "54vh",
                 backgroundColor: ""+props.flavor.color+"",
					       backgroundPosition: "top",
  					     backgroundSize: "contain", 
  					     backgroundRepeat: "no-repeat",
                 margin: "20px"
				};
  return (
  	<div id="flavorcard-div" className="col-12 col-md-3" style={style}>
  		
      <div className="row">
        
        <div className="col-9 justify-content-start align-items-end">
          <h2 className="pl-2 m-0">{props.flavor.name}</h2>
    		  <p className="pl-2 m-0">{props.flavor.category}</p>
    		</div>

        <div className="col-3 d-flex justify-content-center align-items-center">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>

  	</div>
  	
  );
}

export default FlavorCard;

