$(document).ready(function(){
//    $('.menuLine, .menuIcon').addClass('menuInactive');
    var menuActive = 0;
    function initialize(){
        var options = {
            types:['(regions)'],
            componentRestrictions: {country: "IN"}
         }; 
        var input = document.getElementById('locality');
        var autocomplete = new google.maps.places.Autocomplete(input, options);
    }
    if($('.selectArea').val('')){
        google.maps.event.addDomListener(window, 'load', initialize);
        document.getElementById('submit').addEventListener('click', function(){
            alert(document.getElementById('locality').value);
        });
    }
    $('.selectCity').change(function(){
        $('.selectArea').val('');
    });
    
    
    $('.menuIcon').click(function(){
        if($('.menuIcon').hasClass('menuActive')){
            $('.menuArea, .menuLine, .menuIcon').removeClass('menuActive').hide().show().addClass('menuInactive');
        }
        else{
            $('.menuArea, .menuLine, .menuIcon').removeClass('menuInactive').hide().show().addClass('menuActive');
        }
    });
    
});
