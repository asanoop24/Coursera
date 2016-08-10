function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
    });

    var input = document.getElementById('locality');
    var types = 'Addresses';
    
    var autoComplete = new google.maps.places.Autocomplete(input);
    var infoWindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map : map,
        anchorPoint : new google.maps.Point(0, -29)
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
            map.setZoom(17);
        }
        
        
        //    2. setting up the marker
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Point(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
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
        document.getElementById('locality').value = address;
        infoWindow.setContent('<div><strong>' + place.name + '<strong><br>' + address);
        infoWindow.open(map, marker);
    });
}