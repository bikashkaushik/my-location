function initialize() {
var latitude;
var longitude;
var map_canvas = document.getElementById('map_canvas');
 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
function showPosition(position) {
    latitude = position.coords.latitude; 
    longitude = position.coords.longitude;
var map_options = {
center: new google.maps.LatLng(latitude, longitude),
zoom:15,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(map_canvas, map_options)
}
}
google.maps.event.addDomListener(window, 'load', initialize);
