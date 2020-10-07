
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	

	//Create the Bodies Here.]
	ground = createSprite(800,650,1600,10);
	ground.shapeColor = color(255);
	ground = Bodies.rectangle(width/2,650,width,10, {isStatic:true});
	World.add(world,ground);

	dustbin1 = new Dustbin(665,640,140,20);
	dustbin2 = new Dustbin(600,577,20,135);
	dustbin3 = new Dustbin(740,577,20,135);

	paper = Bodies.rectangle(width/2 , 200 , 10 ,10);
	paper = new Paper(300,600,20,20);
	paper.shapeColor = color(130);
	

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);

  

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  keyPressed();

  drawSprites();
 
}

