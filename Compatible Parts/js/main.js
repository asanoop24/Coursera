var feedbackYes = document.querySelector('#feedbackYes');
var feedbackNo = document.querySelector('#feedbackNo');
var feedbackElements = document.querySelectorAll('.feedbackItem');

var sourcePartImage = document.querySelector('#sourcePartImage');
var targetPartImage = document.querySelector('#targetPartImage');
var sourcePartNumber = document.querySelector('#sourcePartNumber');
var targetPartNumber = document.querySelector('#targetPartNumber');

var feedbackValue = ''
var feedbackArray = [];
var partData = JSON.parse(combinations);
var c = 0

var sourcePartImageValue = ''
var targetPartImageValue = ''
var sourcePartNumberValue = ''
var targetPartNumberValue = ''

function pushToJSON(){
  var object = {'sno' : c, 'sourcePartNumber' : sourcePartNumberValue, 'targetPartNumber' : targetPartNumberValue, 'feedback' : feedbackValue}
  feedbackArray.push(object);
}

function getPartData(c){
  sourcePartImageValue = 'url(' + partData[c].sourcePartImage + ')';
  targetPartImageValue = 'url(' + partData[c].targetPartImage + ')';
  sourcePartNumberValue = partData[c].sourcePartNumber;
  targetPartNumberValue = partData[c].targetPartNumber;
}

function updateScreen(c){
  sourcePartImage.style.backgroundImage = sourcePartImageValue;
  targetPartImage.style.backgroundImage = targetPartImageValue;
  sourcePartNumber.innerHTML = sourcePartNumberValue;
  targetPartNumber.innerHTML = targetPartNumberValue;
}


function processFeedback(){
  if(c >= 5) {
    JSON.stringify(feedbackArray);
    console.log(feedbackArray);
    console.log(JSON.stringify(feedbackArray));
    return;
  }
  feedbackValue = this.id.substring(8,this.id.length);
  pushToJSON();
  getPartData(c);
  updateScreen(c);
  c = c + 1;
}

getPartData(0);
updateScreen(0);
c = c + 1
feedbackElements.forEach(elem => elem.addEventListener('click', processFeedback));


document.querySelector('#download').addEventListener('click', function(){
  var str = JSON.stringify(feedbackArray);
  var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);
  var link = document.getElementById('link').href = dataUri;
});
