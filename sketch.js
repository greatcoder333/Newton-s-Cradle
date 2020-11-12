
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
roof = new Roof(400,200,400,45)
ball1 = new Ball (200,600,30)
queue1 = new Queue (ball1.body,roof.body,-ball1Diameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  drawSprites();
 roof.display();
 ball1.display();
 fill("grey")
 noStroke()
 text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
}



