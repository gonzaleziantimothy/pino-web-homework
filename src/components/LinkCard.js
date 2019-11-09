import React from 'react';
import '../assets/css/LinkCards.css';

function LinkCard(props) {
	let style = {	backgroundImage: "url("+props.card.bgImage+")",
					height: "80vh",
					backgroundPosition: "center",
  					backgroundSize: "cover", 
  					backgroundRepeat: "no-repeat"
				};
  return (
  	<div id="card-div" className="col-12 col-md-6 m-0" style={style}>
  		<h2>{props.card.name}</h2>
  		<p>{props.card.caption}</p>
  		<div className="paint-div d-flex justify-content-end"><a href="#" className="card-paint">{props.card.button}</a></div>
  		
  	</div>
  	
  );
}

export default LinkCard;

