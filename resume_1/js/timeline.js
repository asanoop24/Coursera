document.addEventListener("DOMContentLoaded", function(event) {
// DOM loaded completely

  var nodes = document.getElementsByClassName('node');
  var texts = document.getElementsByClassName('text');
  var nodeId = 'node1';


  var p1 = document.getElementById('hello');
  var p2 = document.getElementById('skills');
  var p3 = document.getElementById('workxp');
  var p4 = document.getElementById('education');
  var p5 = document.getElementById('contact');

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function(e) {
    nodeId = e.target.id;
    changePage();
    changePeriod();
    });
    texts[i].addEventListener('click', function(e) {
    nodeId = e.target.id;
    changePage();
    changePeriod();
    });
  }

  function changePage(){
    id = parseInt(nodeId.substring(4,5));
    for(var j = 1; j<=nodes.length; j++){
      eval('p'+j).style.left = (j-id)*100 + '%';
    }
  }




  function changePeriod(){
    id = parseInt(nodeId.substring(4,5));
    // for(var i=1;i<=id;i++){
    //   document.getElementById('node'+i).style.backgroundColor='RGB(26,177,177)';
    //   document.getElementById('bar'+i).style.backgroundColor='RGB(26,177,177)';
    // }
    // for(var i=id+1;i<=nodes.length;i++){
    //   document.getElementById('node'+i).style.backgroundColor='#F8F8FF';
    //   document.getElementById('bar'+i).style.backgroundColor='#F8F8FF';
    // }
    for(var i=0;i<nodes.length;i++){
      textElements = document.getElementsByClassName('text');
      textElements[i].style.transform='scale(1,1)';
      textElements[i].style.opacity='0.5';
      document.getElementById('node'+(i+1)).style.backgroundColor='ghostwhite';
    }
    document.getElementById('text'+id).style.transform='scale(2,2)';
    document.getElementById('text'+id).style.opacity='1';
    document.getElementById('tabTitle').innerHTML = document.getElementById('text'+id).innerHTML;
    document.getElementById('node'+id).style.backgroundColor='RGB(26,177,177)';
    // if(id==nodes.length){
    //   document.getElementById('bar6').style.backgroundColor='RGB(26,177,177)';
    // }
    // else{
    //   document.getElementById('bar6').style.backgroundColor='#F8F8FF';
    // }
  }


  var timeline = document.getElementById('timeline');
  var timelineOverlay = document.getElementById('timelineOverlay');
  var interval = 1;

  setInterval(function(){
    if(interval == 3){
      timeline.style.bottom = '-80px';
      timelineOverlay.style.bottom = '-80px';
      interval = 1;
    }
    interval = interval+1;
  },1000);

  timeline.addEventListener('mouseover', function() {
    timeline.style.bottom = '0px';
    timelineOverlay.style.bottom = '0px';
    interval = 1;
  });


// DOM loaded completely
})
