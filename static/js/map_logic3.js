const uniqueYears = ["2021","2022","2023"];
var cords_years = [];

let uniqueYearsLen = uniqueYears.length;

const years_cords = [];

const populateCordArray = async function() {

  for (let i=0;i<uniqueYearsLen; i++) {
    const fileName = "../../data/cords_"+uniqueYears[i]+".txt";
    
    const response = await fetch(fileName);
    console.log(response);
    const data = await response.text();
    const arrayData = JSON.parse(data);
    
    years_cords.push(JSON.parse(data));
  }
  for await (const coords of years_cords) {
    console.log("I am here")
    console.log(coords.length);
  }
};


populateCordArray();


setTimeout(function() {
  // Code to execute after the delay
  console.log("This will run after 5 seconds.");
}, 5000); 

console.log(years_cords.length);

console.log(years_cords[0]);

///////////

// Creating the map object
var myMap = L.map("map", {
    center: [37.3846664428711, -122.478668212891],
    zoom: 5
  });
  
// Adding tile for mapbox
  // Adding the tile layer
  L.tileLayer('https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
}).addTo(myMap);

  // Adding the tile layer for open street map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://labs.mapbox.com/contribute/">Improve this map</a>'
  }).addTo(myMap);

var line1 = L.polyline([],{smoothFactor: 1, color: 'red', weight: 2}).addTo(myMap);
var line2 = L.polyline([],{smoothFactor: 1, color: 'green', weight: 2}).addTo(myMap);
var line3 = L.polyline([],{smoothFactor: 1, color: 'yellow', weight: 2}).addTo(myMap);

function redraw3(point1, point2, point3) {
  if(point1){
    line1.addLatLng([point1[0],point1[1]]);
  }
  
  if(point2){
    line2.addLatLng([point2[0],point2[1]]);
  }

  if(point3){
    line3.addLatLng([point3[0],point3[1]]);
  }
}

function update3() {
  if (years_cords[0].length) {
      redraw3(years_cords[0].shift(),years_cords[1].shift(),years_cords[2].shift());
      setTimeout(update3, 100);
  }
}

setTimeout(update3, 5000);


