
//check to see if our code is working
console.log("working");



//create map object with a center and zoom level
//let map = L.map("mapid", {
//    center: [40.7, -94.5],
//    zoom: 4
//});

let map = L.map('mapid').setView([40.7, -94.5], 4);

//add a marker to the map for LA, CA
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//add a circle marker
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor:'#ffffa1'
}).addTo(map);

// create tile layer that will be background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
//add our graymap tile layer to map
streets.addTo(map);