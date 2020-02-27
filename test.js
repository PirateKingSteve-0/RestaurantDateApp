const maxCount = 10;

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
	function Dictionary(){
		this.datastore = [];

		this.add = function(key, value){
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
	
		this.findAt = function(key){
			for(var i=0;i<this.datastore.length;i++){
				if(this.datastore[i].key == key){
					// console.log("findAt function yields: " + this.da
					return this.datastore;
				}
			}
			return this.datastore;
		};

		this.findAtPos = function (pos){
			return this.datastore[pos].key;
		};
	
		this.size = function() {
			return this.datastore.length;
		};
	}

	var placesToEat = new Dictionary();
	var count = maxCount; // set at 10
	var ranNum = 0;
	var i = 0;

	while(i<maxCount){
		ranNum = Math.floor(Math.random()*20);
		if(ranNum != 6 && ranNum != 15 && ranNum != 24){
			placesToEat.add(data.data[ranNum].name,1);
			console.log("ranNum: " + ranNum);
			console.log(data.data[ranNum].name);
			
			i++;
		}
		console.log(i);
	}	
	console.log(placesToEat.datastore);
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

