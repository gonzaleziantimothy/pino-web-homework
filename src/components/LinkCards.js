import React from 'react';
import '../assets/css/LinkCards.css';
import LinkCard from './LinkCard.js';

function LinkCards() {
	
	let card1 = {
		id: 1,
		name:"OUR FLAVOURS",
		caption:"WHAT IS YOUR FAVORITE?",
		bgImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/Flavors.jpg",
		button:"VIEW ALL"
	};

	let card2 = {
		id: 2,
		name:"WHERE TO BUY",
		caption:"ONE SCOOP OR TWO?",
		bgImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/Where-to-buy.jpg",
		button:"FIND US"
	};

	let card3 = {
		id: 3,
		name:"CHILL WITH US",
		caption:"SEE UPCOMING EVENTS",
		bgImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/Discover-1.jpg",
		button:"SEE SCHEDULE"
	};

	let card4 = {
		id: 4,
		name:"START SCOOPING",
		caption:"WANT TO BE A DISTRIBUTOR?",
		bgImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/FAQ.jpg",
		button:"LEARN MORE"
	};

	let cardsArray = [card1, card2, card3, card4];
	console.log(card1);

	let cardsDisplay = cardsArray.map(function(card){
		return <LinkCard 	key = {card.id}
							card = {card} />
	})



  return (
  	<div id="cards-div" className="p-0 m-0">
  		<div className="row p-0 m-0 w-100">
  			{cardsDisplay}
  		</div>
  		

  	</div>
  	
  );
}

export default LinkCards;

