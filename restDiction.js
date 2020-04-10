const maxCount = 10;
var userInput;
class restDiction {
    
    datastore = [];

	/*
	    .add
		function will add a pair of key and value to the array datastructure named 
		datastore
		NOTE: for now the pair are not in full use capacity since only the name stored in the object received is being used
	*/ 
	add = function(key, value){
		if(key && value){
			this.datastore.push({
				key: key,
				value: value
			});
			return this.datastore;
		}
	};
	
	// this.removeAt = function(key){
	// 	for(var i=0;i<this.datastore.length;i++){
	// 		if(this.datastore[i].key === key){
	// 			this.datastore.splice(this.data[i],1);
	// 			return this.datastore;
	// 		}
	// 	}
	// 	return this.datastore;
	// };
	
	/*
		.findAt
			function will search through the array named datastore
	*/
	findAt = function(key){
		for(var i=0;i<this.datastore.length;i++){
			if(this.datastore[i].key == key){ // if found return the datastore
				return this.datastore;
			}
		}
		return this.datastore;
	};

    /*
		.findAtPost
			function will return the key element at the parameter pos(index, count, etc)
	*/
	findAtPos = function (pos){
		return this.datastore[pos].key;
	};
	
	/*
		.size
			function will return an intenger value of the number of elements stored in datastore
	*/
	size = function() {
		return this.datastore.length;
	};
}

//location lookup
fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=pattaya", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "cea5764a85mshbf6d70287cd797ap1adc4ejsnd00c8a3aba19"
	}
})
.then(response => response.json())
.then(location => {
	console.log(location);
})
.catch(err => {
	console.log(err);
});

fetch("https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=293919", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "cea5764a85mshbf6d70287cd797ap1adc4ejsnd00c8a3aba19"
	}
})
.then(response => response.json())
.then(data => {
	console.log(data);

	var placesToEat = new restDiction();
	var count = maxCount; // set at 10
	var ranNum = 0;
	var i = 0;

	// While i is less than 10 or maxCount
	while(i<maxCount){
		ranNum = Math.floor(Math.random()*30); // generate a random number between 0 and 30
		// this if statement will skip randomly generated numbers 6, 15, and 24 for they are ads in the datastore,
		// since they are ads they don't match the value when being compared to .name or any other element 
		if(ranNum != 6 && ranNum != 15 && ranNum != 24){
			// the for loop below is to check for doubles. if the .name is previously stored then found is true and we will 
			// generate a new random number
			var found = false; 
			for(var j=0;j<placesToEat.datastore.length;j++){
				if(data.data[ranNum].name === placesToEat.datastore[j].key){
					found = true;
				}
			}// end of for

			// if found is still false then the value being addes is fresh and we will store it in the array
			if(found === false){
				placesToEat.add(data.data[ranNum].name,1);
				i++;
			}
		}// end of outer if
	}// end of while

	// console.log(placesToEat.datastore); // uncomment this if data needs to be checked in console
	document.getElementById("b1").innerHTML = placesToEat.findAtPos(0);
	document.getElementById("b2").innerHTML = placesToEat.findAtPos(1);
	document.getElementById("b3").innerHTML = placesToEat.findAtPos(2);
	document.getElementById("b4").innerHTML = placesToEat.findAtPos(3);
	document.getElementById("b5").innerHTML = placesToEat.findAtPos(4);
	document.getElementById("b6").innerHTML = placesToEat.findAtPos(5);
	document.getElementById("b7").innerHTML = placesToEat.findAtPos(6);
	document.getElementById("b8").innerHTML = placesToEat.findAtPos(7);
	document.getElementById("b9").innerHTML = placesToEat.findAtPos(8);
	document.getElementById("b10").innerHTML = placesToEat.findAtPos(9);
})
.catch(err => {
	console.log(err);
});

var locationID = function retrieveLoc(){
	var locID = document.getElementById('location-form');
	userInput = locID.inputLocID.value;
	console.log(userInput);
}