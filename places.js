/* Note: This example requires that you consent to location sharing when
     * prompted by your browser. If you see the error "Geolocation permission
     * denied.", it means you probably did not give permission for the browser * to locate you. */
let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;
function initGoogle() {

  /* TODO: Step 4A3: Add a generic sidebar */

  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
      });

      /* TODO: Step 3B2, Call the Places Nearby Search */
      // Call Places Nearby Search on user's location
      getNearbyPlaces(pos);
    }, () => {
      // Browser supports geolocation, but user has denied permission
      handleLocationError(true, infoWindow);
    });
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }
}

function updateArray(kWord) {

    /* TODO: Step 4A3: Add a generic sidebar */
  
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 15
        });
  
        /* TODO: Step 3B2, Call the Places Nearby Search */
        // Call Places Nearby Search on user's location
        getNearbyPlaces(pos,kWord);
      }, () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError_up(true, infoWindow);
      });
    } else {
      // Browser doesn't support geolocation
      handleLocationError_up(false, infoWindow);
    }
  }

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set default location to Sydney, Australia
  pos = { lat: -33.856, lng: 151.215 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });

  /* TODO: Step 3B3, Call the Places Nearby Search */
  // Call Places Nearby Search on the default location
  getNearbyPlaces(pos);
}

function handleLocationError_up(browserHasGeolocation, infoWindow) {
    // Set default location to Sydney, Australia
    pos = { lat: -33.856, lng: 151.215 };
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 15
    });
  
    /* TODO: Step 3B3, Call the Places Nearby Search */
    // Call Places Nearby Search on the default location
    getNearbyPlaces(pos,kWord);
  }

/* TODO: Step 3B1, Call the Places Nearby Search */
// Perform a Places Nearby Search Request
function getNearbyPlaces(position) {
//   var maxDistance = slider.value;
  let request = {
    location: position,
    radius: 16093.4,
    keyword: rChoices[0],
    opennow: true
  };
//   console.log(maxDistance);
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

/* TODO: Step 3B1, Call the Places Nearby Search */
// Perform a Places Nearby Search Request
function getNearbyPlaces_up(position,keywordAr) {
      var maxDistance = slider.value;
      let request = {
        location: position,
        radius: maxDistance,
        keyword: keywordAr,
        opennow: true
      };
      console.log(maxDistance);
      console.log(request.radius);
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, nearbyCallback);
    }

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
  }
}

function convertDistance(metersDist){
    var convDist = 0;
    convDist = metersDist * 0.000621371;
    return convDist;
}



function firstCall(){
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
            updateArray(rChoices[0]);
            resolve();
        ;} , 5000
        );
    });
}

async function secCall(){
    await firstCall();
    updateArray(rChoices[1]);
}

// fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAgsrpymvbKkbBsoEoulmiOlNI0AxAHI9M')
//   .then(response => response.json())
//   .then(data => console.log(data));


fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAgsrpymvbKkbBsoEoulmiOlNI0AxAHI9M", {
	"method": "GET",
	"mode": "no-cors"
})
.then(response => response.json())
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
});