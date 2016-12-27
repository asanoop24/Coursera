$(document).ready(function(){
    $('#menuIcon').click(function(){
        if($('#menuIcon').hasClass('menuActive')){
            $('#menu, .menuIconLine, #menuIcon').removeClass('menuActive').addClass('menuInactive');
        }
        else{
            $('#menu, .menuIconLine, #menuIcon').removeClass('menuInactive').addClass('menuActive');
        }
    });

    window.addEventListener('click', function(e){
      if(!e.toElement.id.includes('menu')){
        $('#menu, .menuIconLine, #menuIcon').removeClass('menuActive').addClass('menuInactive');
      }
    });


});
