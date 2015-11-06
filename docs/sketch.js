var data;
var treasure;
var paragraph;
var spot = 0;
var intro;

function preload(){
  data = loadJSON('thoughts.json');
}

function setup() {
  frameRate(60);
  treasure = data.treasure;
  paragraph = createP("...")
  intro = createElement('h2', "This Is Where I Pause to Experiment");
  status = createElement('h2', "currently no experiments on view, check back"); 
}

function think() {
  paragraph.html("I think about " + treasure[spot]);
  println(treasure[spot]);
  spot += 1;
  println(spot);
  if (spot >= treasure.length){
    paragraph.html("I think about ...");
    spot = 0;
   }
}

setInterval(think, 1000); 


