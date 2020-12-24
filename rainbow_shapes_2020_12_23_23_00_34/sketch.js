function setup() {
  createCanvas(700, 500);
  background(88);
}
function draw(){
  //stating the details of the shapes to be created 
  fill(0, 755);
  noStroke(); 
  makeShapes();
}
function makeShapes(){
  fill(random(255),random(255),random(255),random(255));
  //making random boxes such that they move along with the cursor of the mouse//positioning the second ellipses in the reverse manner as the first to show them in the opposite directions// and more boxes in opposite directions
  rect(mouseX,mouseY,50,50);
  ellipse(mouseY,mouseX,50,50);
  rect(mouseX,mouseY,50,50);
}