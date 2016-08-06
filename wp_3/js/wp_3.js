$(document).ready(function(){
    function initialize(){
        var options = {
            types:['(regions)'],
            componentRestrictions: {country: "IN"}
         };
        var input = document.getElementById('locality');
        var autocomplete = new google.maps.places.Autocomplete(input, options);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    document.getElementById('submit').addEventListener('click', function(){
       alert(document.getElementById('locality').value); 
    });
});
