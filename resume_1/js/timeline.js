document.addEventListener("DOMContentLoaded", function(event) {
// DOM loaded completely

  var nodes = document.getElementsByClassName('node');
  var texts = document.getElementsByClassName('text');
  var nodeId = 'node1';
  var education = document.getElementById('education')

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function(e) {
    nodeId = e.target.id;
    changePeriod();
    });
    texts[i].addEventListener('click', function(e) {
    nodeId = e.target.id;
    changePeriod();
    });
  }

  function changePeriod(){
    id = parseInt(nodeId.substring(4,5));
    for(var i=1;i<=id;i++){
      document.getElementById('node'+i).style.backgroundColor='RGB(26,177,177)';
      document.getElementById('bar'+i).style.backgroundColor='RGB(26,177,177)';
    }
    for(var i=id+1;i<=nodes.length;i++){
      document.getElementById('node'+i).style.backgroundColor='RGB(0,0,0)';
      document.getElementById('bar'+i).style.backgroundColor='RGB(0,0,0)';
    }
    for(var i=0;i<nodes.length;i++){
      textElements = document.getElementsByClassName('text');
      textElements[i].style.transform='scale(1,1)';
      textElements[i].style.opacity='0.5';
    }
    document.getElementById('text'+id).style.transform='scale(2,2)';
    document.getElementById('text'+id).style.opacity='1';
    document.getElementById('tabTitle').innerHTML = document.getElementById('text'+id).innerHTML;

    if(id==nodes.length){
      document.getElementById('bar6').style.backgroundColor='RGB(26,177,177)';
    }
    else{
      document.getElementById('bar6').style.backgroundColor='RGB(0,0,0)';
    }
  }

// DOM loaded completely
})
