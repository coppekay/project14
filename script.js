let directionsService;
let directionsRenderer
let map;
// Initialize and add the map
function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = { lat: 40.072817, lng: -95.668270 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: coordinates,
    });
    directionsRenderer.setMap(map);

    
}
//A function for the polyline of the places i want to travel to 
function polyline() {
    const polylineCoordinates = [
       
        { lat: 32.542079, lng: -97.321536},//Hometown
        { lat: 41.878939, lng: -87.629988},//Chicago
        { lat: 44.023793, lng: -112.103843},//Yellowstone
        { lat: 47.605685, lng: -122.333644},//Seattle
        { lat: 37.910526, lng: -119.258116},//Yosemite
        { lat: 37.648543, lng: -118.971939},//Mammoth Lakes, CA
        { lat: 36.199328, lng: -112.052845},//Grand Canyon
        { lat: 40.234716, lng: -111.658466},//Provo
        { lat: 26.981288, lng: -82.0938555},//Port Charlotte
        { lat: 42.522910, lng: -70.9068295},//Salem
    ];

    const polylinePath = new google.maps.Polyline({
        path: polylineCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    polylinePath.setMap(map);
}


function homeMarker(){
    let coordinates = { lat: 32.542079, lng: -97.321536}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function chicagoMarker(){
    let coordinates = { lat: 41.878939, lng: -87.629988}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function glacierMarker(){
    let coordinates = { lat: 48.502365, lng: -113.986693}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function yellowMarker(){
    let coordinates = { lat: 44.023793, lng: -112.103843}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}
function seattleMarker(){
    let coordinates = { lat: 47.605685, lng: -122.333644}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}
function yosemiteMarker(){
    let coordinates = { lat: 37.910526, lng: -119.258116}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function mammothMarker(){
    let coordinates = { lat: 37.648543, lng: -118.971939}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function grandMarker(){
    let coordinates =  { lat: 36.199328, lng: -112.052845}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function provoMarker(){
    let coordinates = { lat: 40.234716, lng: -111.658466}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

function charMarker(){
    let coordinates = { lat: 26.981288, lng: -82.0938555}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}
function salemMarker(){
    let coordinates = { lat: 42.522910, lng: -70.9068295}
    const marker = new google.maps.Marker({
       position: coordinates,
       map: map,
   });
}

