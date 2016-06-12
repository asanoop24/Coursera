var currIndex = 1;
var nextIndex = 1;
var currImage = '#i' + currIndex.toString();
var nextImage = '#i' + nextIndex.toString();

$(document).ready(function(){
    $('#previousBox').click(function(){
        if(currIndex > 1){
            nextIndex=currIndex-1;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
            $(currImage+','+ nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
            //$(nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
            $(currImage).addClass('slideOutRight');
            $(nextImage).addClass('slideInRight');
            currIndex-=1;
        }
    });
    $('#nextBox').click(function(){
        if(currIndex < 3){
            nextIndex=currIndex+1;
            currImage = '#i' + currIndex.toString();
            nextImage = '#i' + nextIndex.toString();
            $(currImage+','+ nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
            //$(nextImage).removeClass('slideOutRight slideOutLeft slideInRight slideInLeft');
            $(currImage).addClass('slideOutLeft');
            $(nextImage).addClass('slideInLeft');           
            currIndex+=1;  
        }

    });
});