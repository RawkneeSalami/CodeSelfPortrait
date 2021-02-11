/*************************************************************************
    (*)Code Self Portrait
    (*)by RONNIE SAINI
    (*)Overview - Self portrait Project in p5 JS
 
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
    (*) I can understand basic shapes and drawings not much more than that.
**************************************************************************/

// Debug mode
var gDebugMode = true;



function setup() {

	createCanvas(800, 800);

	cursor(WAIT);

	textSize(14);

	textAlign(LEFT);

	background(120, 89, 145);
  
  neck();
	face();
  hair();
  eyez();

 }


function draw() {
  
  
  if(gDebugMode == true){
  	drawDebugInfo();
  }


}

//mouse coord on screen broken!
function drawDebugInfo(){
	fill(255);
	text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

//my face skin brown
function face(){
	noStroke();
	fill(186, 173, 136);
	ellipse(400, 400,210,300);
  fill(128, 0, 0);
  ellipse(400, 500,111,44);
  fill(0 , 0, 0);
  triangle(400, 550,410, 560, 430, 540);
}

//my Hair with Details & Triangles
function hair(){
	noStroke();
	fill(0 , 0, 0);
	rect(350,230,120,40)
  triangle(350, 230,360, 230, 222, 222);
  triangle(350, 230,350, 200, 300, 200);
  triangle(350, 230,350, 200, 300, 300);
  triangle(380, 230,350, 200, 300, 300);
  triangle(380, 230,380, 200, 355, 300);
  triangle(380, 300,380, 300, 355, 300);
}


//eye ploygons
function eyez(){
	noStroke();
	fill(255, 255, 255);
	ellipse(350, 333,22,12);
    ellipse(400, 333,22,12);
  
  	fill(0, 0, 0);
	ellipse(350, 333,10,3);
    ellipse(400, 333,10,3);
}

//neck and torso
function neck()
{

  fill(186, 173, 136);
  rect(369, 510, 69, 144);
  
      fill(49, 49, 115);
  ellipse(400, 851, 500);

  
}


