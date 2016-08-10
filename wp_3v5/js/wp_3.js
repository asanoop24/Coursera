$(document).ready(function(){
//    var menuActive = 0;
//    if($('.selectArea').val('')){
//        document.getElementById('submitText').addEventListener('click', function(){
//            alert(document.getElementById('locality').value);
//        });
//    }
//    
    $('.menuIcon').click(function(){
        if($('.menuIcon').hasClass('menuActive')){
            $('.menuArea, .menuLine, .menuIcon').removeClass('menuActive').hide().show().addClass('menuInactive');
        }
        else{
            $('.menuArea, .menuLine, .menuIcon').removeClass('menuInactive').hide().show().addClass('menuActive');
        }
    });
    
});
