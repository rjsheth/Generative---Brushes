var x=0;
var y=0;
var stepSize = 90.0;
var lineLength = 30; 
var mode = 1; 
function setup() {
  createCanvas(800, 800);
  background(55,20,55,235);
  noStroke();
  frameRate(30);
  //fill(200,120,55,235);
  //rect(0,0,800,400);
  //rect(0,0,800,200);
  //rect(0,400,800,200);
  // fill(200,120,55,235);
  // rect(0,0,400,400);
  // rect(400,400,400,400);
}

function draw() {
    if(mouseIsPressed){
    	var d = dist(x,y,mouseX,mouseY);
      if(d>stepSize){
      	var angle = atan2(mouseY-y, mouseX-x);
        
        push();
        fill(55,20,55,25);
        rect(0,0,width,height);
        if(true) {
          translate(x,y);
          rotate(angle);
          stroke(floor(random(200,255)),floor(random(200,255)),floor(random(200,255)));
          strokeWeight(10);
          if(frameCount % 2 == 0){ 
            //strokeWeight(15);
            strokeWeight(floor(random(6,9)));
          }
          line(0,0,0,lineLength*random(0.95,1.0)*d/10);
          //line(0,0,0,lineLength*random(0.95,1.0)*d/10);
        } 
        // else if(/*mouseX>400*/mouseX<400 && mouseY>400) {
        //   noStroke();
        //   //fill(255, 204, 0);
        //   fill(200,190,55,200);
        //   translate(mouseX,mouseY);
        //   rotate(angle+PI);
        //   ellipse(0,0,d,20);
        // }
        pop();
        mode = ceil(random(1,2));
        if(mode == 1){
        	x = x + cos(angle) * stepSize;
          y = y + sin(angle) * stepSize;
        }
        else {
        	x = mouseX;
          y = mouseY;
        }
      }
    }
}