 
      function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 134.397, lng: 150.644},
              zoom: 15
          });
          var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                  };
                  infoWindow.setPosition(pos);
//                  infoWindow.setContent('hun ki haal ne');
                  map.setCenter(pos);
//                  alert(pos.lat + ' - ' + pos.lng);
                  //o chal ja hun parava
                  function geocodeLatLng(geocoder){
                      geocoder.geocode({'location': latlng}, function(results, status) {
                          if (status === 'OK') {
                              if (results[1]) {
                                  map.setZoom(15);
                                  alert(results[1].formatted_address);
                                  infowindow.setContent(results[1].formatted_address);
                              } else {
                                  window.alert('No results found');
                              }                      
                          }
                          else {
                              window.alert('Geocoder failed due to: ' + status);
                          }
                      }
                  var marker = new google.maps.Marker
                  (
                      {
                          position: new google.maps.LatLng(pos.lat, pos.lng),
                          map: map,
                          title: 'Click me'
                      }
                  );
                  
              }, function() {
                  handleLocationError(true, infoWindow, map.getCenter());
              });
          }
          
          else {
          // Browser doesn't support Geolocation
              handleLocationError(false, infoWindow, map.getCenter());
          }
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.'
                         );
}