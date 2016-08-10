var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

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
                  infoWindow.setContent('hun ki haal ne');
                  map.setCenter(pos);
                  //o chal ja hun parava
                  var query = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.lat + ',' + pos.lng + '&sensor=true';
                    document.getElementById('detectLocation').addEventListener('click', function(){
                       getJSON(query, function(err, data) {
                            if (err != null) {
                                alert('Something went wrong: ' + err);
                            } 
                            else {
                               document.getElementById('locality').value = data.results[1].formatted_address);
//                                result.innerText = data.result;
                            }                  
                        });                                                    
                                                                               });


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