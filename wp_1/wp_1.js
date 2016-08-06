$(document).ready(function(){
////////////////    
    
    //Initially Hidden Menu
    $('#menuArea').addClass('menuInitialState');
    
    //Menu Item fade-Out on Hovering    
    $('a').hover(function(){
        $(this).addClass('menuHover');
    },function(){
        $(this).removeClass('menuHover');
    });
    
    //Menu Icon Click to Hide/Unhide Menu
    $('.menuIcon').click(function(){
        if($('#menuArea').hasClass('menuInitialState')){
            $('#menuArea').removeClass('menuInitialState');
            $('#menuArea').addClass('menuOpen');
            $('.menuIcon').show();
            $(this).hide();
        }
        else {
            $('#menuArea').toggleClass('menuOpen menuClose');
            $('.menuIcon').show();
            $(this).hide();
        }
        $('.menuIcon').addClass('element');
    });
    
    //Login Form Buttons change color shade on hovering
    $('button').hover(function(){
        $(this).addClass('buttonHover');
    },function(){
        $(this).removeClass('buttonHover');
    });
    
    //LogIn Button Click Event
    $('#logIn').click(function(){
        var email = $('#email').val();
        if(isEmail(email))
        {alert(email)}
        else
        {alert('false')};
    });

    //Additional Functions
    
    //Email Validation
    function isEmail(email) {
        var criteria = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return criteria.test(email);
    }
    

////////////////
});