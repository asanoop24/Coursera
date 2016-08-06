var currIndex = 1;
var nextIndex = 1;
var currImage = '#i' + currIndex.toString();
var nextImage = '#i' + nextIndex.toString();

$(document).ready(function(){
    $('#previousBox').click(function(){
        if(currIndex <= 1){
            currIndex = 1;
            nextIndex = 4;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
        }
        else if(currIndex > 1){
            nextIndex = currIndex-1;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
        }
        $(currImage+','+ nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
        $('.image').hide();
        $(currImage+','+ nextImage).show();
        $(currImage).addClass('slideOutRight');
        $(nextImage).addClass('slideInRight');
        currIndex = nextIndex;
        nextIndex = currIndex - 1;
    });
    
    $('#nextBox').click(function(){
        if(currIndex >= 4){
            currIndex = 4;
            nextIndex = 1;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
        }
        else if(currIndex < 4){
            nextIndex = currIndex + 1;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
        }
        $('.image').hide();
        $(currImage+','+ nextImage).show();
        $(currImage+','+ nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
        $(currImage).addClass('slideOutLeft');
        $(nextImage).addClass('slideInLeft');           
        currIndex = nextIndex;
        nextIndex = currIndex + 1;
    });
});
