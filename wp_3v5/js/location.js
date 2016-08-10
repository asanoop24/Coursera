var getJSON = function(url, callback){
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
var marker;
function toggleBounce(){
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    }
    else {
//        marker.setAnimation(google.maps.Animation.BOUNCE);
        alert(marker.getPosition());
    }
}
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.99, lng: 77.55},
    zoom: 13
    });

    var input = document.getElementById('locality');
    var types = 'Addresses';
    var options = {
        componentRestrictions: {country: "IN"}
    }; 
    var autoComplete = new google.maps.places.Autocomplete(input, options);
    var infoWindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
        map : map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 12.99, lng: 77.55}
    });
    marker.addListener('click', toggleBounce);
    document.getElementById('detectLocation').addEventListener('click', function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var pos = {
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                };
                var query = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.lat + ',' + pos.lng + '&sensor=true';
                getJSON(query, function(err, data){
                    document.getElementById('locality').value = data.results[1].formatted_address;
//                    alert(pos.lat + ' - ' + pos.long);
                    map.setCenter(pos);
                    map.setZoom(15);
                    marker.setPosition(pos);
                    infoWindow.setPosition(pos);
                    infoWindow.setContent(data.results[1].formatted_address);
                    infoWindow.open(map, marker);
                });
            });
        }
    });
    
    autoComplete.addListener('place_changed', function(){
        infoWindow.close();
        marker.setVisible(false);
        var place = autoComplete.getPlace();

        //    1. locating the point on map
        if(!place.geometry){
            window.alert('Autocomplete place contains no geometry!');
        }
        
        if(place.geometry.viewport){
            map.fitBounds(place.geometry.viewport);
        }
        else{
            map.setCenter(place.geometry.location);
            map.setZoom(15);
        }
        
        
        //    2. setting up the marker
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        
        var address = '';
        if(place.address_components){
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || ''),
            ].join(' ');
        }
        infoWindow.setContent('<div><strong>' + place.name + '<strong><br>' + address);
        infoWindow.open(map, marker);
    });
}