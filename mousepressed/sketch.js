
// This determines what each of my variables will be in this code.
var r,g,b
// The function set-up will set up the initial and most basic parts of the code. I use it once.
function setup() { 
// createCanvas simply makes the size of the square that I will be drawing on 
	createCanvas(800, 800);	
//Every time the variable r appears a random value from 0- 255 will be placed.
	r = random(255);
	//Every time the Variable g appears a random value from 0- 255 will be placed. 
g = random(255);
//Every time the variable b appears a random value from 0- 255 will be placed.
	b = random(255);
	// The variables will make the background appear with three random values for red, blue, and green.
	background(r,b,g);
	// framerate is how quickly the image on the canvas will be updated.
	frameRate(120)
//closes function.
} 
//has the code repeated constantly, unless something tells it to stop. Keeps "drawing" the code.
function draw() { 
//close function.
}
//This activates what is bellow as long as the mouse is clicked and dragging across the screen.
function mouseDragged(){
//the shapes made will not have any stroke.
	noStroke();
//there will be circles made, each 10 by 10. Their location is controlled by the mouse	
	ellipse(mouseX,mouseY,50,50)
//the shapes color will be filled by the random r,g,b, variables.	
	fill(g,r,b)
// There will be a random value when the variable r occurs.
r = random(255);
// Will put a random value for the variable g when it occurs.
g = random(255);
//Will put a random value for the variable b when it occurs.
	b = random(255);
 // closes the function
}
// what is below will occur every time I move the mouse wheel.
function mouseWheel(){
//The background will be random, based on the values of variables r, b, and g
	background(r,b,g)
	// close function
}

