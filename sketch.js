
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Box(400,680,800,10)
	box1=new Box(500,650,200,20)
		box2=new Box(400,610,20,100)
		box3=new Box(600,610,20,100)
paper=new Paper(250,600,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300})
	   
	 }
   }


