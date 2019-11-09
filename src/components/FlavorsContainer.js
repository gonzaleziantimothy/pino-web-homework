import React, { useState } from 'react';
import '../assets/css/Flavors.css';
import FlavorCard from './FlavorCard.js';

function FlavorsContainer() {
	let flavor1 = {
		id: 1,
		name:"AVOCADO",
		category:"Pinoy Sorbetes",
		color:"#B1C099",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04386_TOP_Avocado-edit.jpg",	
	};
	let flavor2 = {
		id: 2,
		name:"BELGIAN CHOCOLATE",
		category:"Balance",
		color:"#724331",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04374_TOP_Belgian-Chocolate-edit.jpg",	
	};
	let flavor3 = {
		id: 3,
		name:"BLACK SESAME",
		category:"Premium Ice Cream",
		color:"#8F8E94",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04273_TOP_Black-Sesame-edit.jpg",	
	};
	let flavor4 = {
		id: 4,
		name:"BLUEBERRY",
		category:"Limited Edition",
		color:"#8A9DC5",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04261_TOP_Blueberry-edit.jpg",	
	};
	let flavor5 = {
		id: 5,
		name:"BUBBLEGUM",
		category:"Premium Ice Cream",
		color:"#8BC2CC",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04264_TOP_Bubblegum-edit.jpg",	
	};
	let flavor6 = {
		id: 6,
		name:"BUTTER PECAN",
		category:"Limited Edition",
		color:"#C39A62",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04277_TOP_Butter-Pecan-edit.jpg",	
	};
	let flavor7 = {
		id: 7,
		name:"CAFE LATTE",
		category:"Balance",
		color:"#A17547",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04377_TOP_Cafe-Latte-edit.jpg",	
	};
	let flavor8 = {
		id: 8,
		name:"CAPPUCCINO",
		category:"Premium Ice Cream",
		color:"#937250",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04358_TOP_Cappuccino-edit.jpg",	
	};
	let flavor9 = {
		id: 9,
		name:"CHOCO MARBLE",
		category:"Balance",
		color:"#C1C0BC",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04320_TOP_Choco-Marble.jpg",	
	};
	let flavor10 = {
		id: 10,
		name:"CHOCO MINT",
		category:"Premium Ice Cream",
		color:"#A9D1AF",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04283_TOP_Choco-Mint-edit.jpg",	
	};
	let flavor11 = {
		id: 11,
		name:"CHOCOLATE",
		category:"Premium Ice Cream",
		color:"#553027",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04362_TOP_Chocolate-edit.jpg",	
	};
	let flavor12 = {
		id: 12,
		name:"COOKIES 'N CREAM",
		category:"Premium Ice Cream",
		color:"#C1C0BC",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04306_TOP_Cookies-n-Cream-edit.jpg",	
	};
	let flavor13 = {
		id: 13,
		name:"DARK CHOCOLATE TRUFFLES",
		category:"Frozen Custard",
		color:"#4F291E",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04349_TOP_Dark-Chocolate-Truffles-edit.jpg",	
	};
	let flavor14 = {
		id: 14,
		name:"DOUBLE DUTCH",
		category:"Premium Ice Cream",
		color:"#A19A9A",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04288_TOP_Double-Dutch-edit.jpg",	
	};
	let flavor15 = {
		id: 15,
		name:"DULCE CARAMELO",
		category:"Premium Ice Cream",
		color:"#9A673B",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04255_TOP_Dulce-Caramelo-edit.jpg",	
	};
	let flavor16 = {
		id: 16,
		name:"DURIAN",
		category:"Premium Ice Cream",
		color:"#D5C06E",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04353_TOP_Durian-edit.jpg",	
	};
	let flavor17 = {
		id: 17,
		name:"EARL GREY",
		category:"Frozen Custard",
		color:"#BEAB9D",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04402_TOP_Earl-Grey-edit.jpg",	
	};
	let flavor18 = {
		id: 18,
		name:"ESPRESSO",
		category:"Frozen Custard",
		color:"#CFA97C",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04410_TOP_Espresso-edit.jpg",	
	};
	let flavor19 = {
		id: 19,
		name:"FRENCH VANILA",
		category:"Balance",
		color:"#D3C594",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04380_TOP_French-Vanilla-edit.jpg",	
	};
	let flavor20 = {
		id: 20,
		name:"GREEN TEA",
		category:"Premium Ice Cream",
		color:"#8D975B",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04365_TOP_Green-Tea-edit.jpg",	
	};
	let flavor21 = {
		id: 21,
		name:"HALO-HALO",
		category:"Pinoy Sorbetes",
		color:"#A27AB8",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04330_TOP_Halo-Halo-edit.jpg",	
	};
	let flavor22 = {
		id: 22,
		name:"LEMON CURD",
		category:"Frozen Custard",
		color:"#DAB662",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04345_TOP_Lemon-Curd-edit.jpg",	
	};
	let flavor23 = {
		id: 23,
		name:"MACAPUNO",
		category:"Premium Ice Cream",
		color:"#D9D1BA",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04356_TOP_Macapuno-edit.jpg",	
	};
	let flavor24 = {
		id: 24,
		name:"MANGA",
		category:"Pinoy Sorbetes",
		color:"#DEA74D",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04389_TOP_Mangga-edit.jpg",	
	};
	let flavor25 = {
		id: 25,
		name:"MANGO",
		category:"Premium Ice Cream",
		color:"#E2C88B",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04311_TOP_Mango-edit.jpg",	
	};
	let flavor26 = {
		id: 26,
		name:"MANGOES 'N CREAM",
		category:"Balance",
		color:"#D3A454",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04323_TOP_Mangoes-n-Cream-edit.jpg",	
	};
	let flavor27 = {
		id: 27,
		name:"MANTECADO REAL",
		category:"Frozen Custard",
		color:"#D8C9A2",
		flavorImage:"http://fruitsinicecream.com/wp-content/uploads/2019/03/DSC04405_TOP_Mantecado-Real-edit.jpg",	
	};

	let flavorsArray = [ 	flavor1, flavor2, flavor3, flavor4, flavor5, flavor6, flavor7, flavor8, flavor9,
							flavor10, flavor11, flavor12, flavor13, flavor14, flavor15, flavor16, flavor17, flavor18,
							flavor19, flavor20, flavor21, flavor22, flavor23, flavor24, flavor25, flavor26, flavor27
						];

	

	let balanceArray = flavorsArray.filter(flavor =>flavor.category === "Balance");

	let premiumArray = flavorsArray.filter(flavor =>flavor.category === "Premium Ice Cream");

	let pinoyArray = flavorsArray.filter(flavor =>flavor.category === "Pinoy Sorbetes");
	
	let custardArray = flavorsArray.filter(flavor =>flavor.category === "Frozen Custard");

	let limitedArray = flavorsArray.filter(flavor =>flavor.category === "Limited Edition");



	let balanceDisplay = balanceArray.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	let premiumDisplay = premiumArray.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	let pinoyDisplay = pinoyArray.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	let custardDisplay = custardArray.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	let limitedDisplay = limitedArray.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	let [currentPage, setCurrentPage] = useState(1);

	let flavorsPerPage = 9;

	let indexOfLastFlavor = currentPage * flavorsPerPage;
	let indexOfFirstFlavor = indexOfLastFlavor - flavorsPerPage;
	let currentFlavors = flavorsArray.slice(indexOfFirstFlavor, indexOfLastFlavor);


	let flavorsDisplayAll = currentFlavors.map(function(flavor){
		return <FlavorCard 	key = {flavor.id}
							flavor = {flavor}
							 />
	});

	function changePageClickHandler(number){
		console.log(number)
		setCurrentPage(number);
	}

	let pageNumbers = [];

	for (let i = 1; i <= Math.ceil(flavorsArray.length / flavorsPerPage); i++) {
          pageNumbers.push(i);
    };

    let pageDisplay = pageNumbers.map(function(number){
    	console.log(number);
    	return  <button className="btn"
	              key={number}
	              onClick={function(){changePageClickHandler(number)}}
            	>
              		{number}
            	</button>
    });

  return (
  	<React.Fragment>
	  	<div id="flavors-div" className="">
	  		<div className="row p-5 flavors-display-div mx-0">
	  			{flavorsDisplayAll}
	  		</div>
	  		<div className="flavors-pagination m-0 p-0 text-center">
	  			{pageDisplay}
	  		</div>
	  	</div>
	  	
	
  	</React.Fragment>
  	
  );
}

export default FlavorsContainer;





