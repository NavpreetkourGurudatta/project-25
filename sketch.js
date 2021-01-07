
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var dust,PAPER
var dustbin1,dustbin2,dustbin3
var ground,paperIMG
function preload()
{
paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 400);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dust = new Paper(120,340);
	
	dustbin1 = new Dustbin(870,380,200,350);
	//dustbin2 = new Dustbin(780,350,19,120);
	//dustbin3 = new Dustbin(980,350,19,120);
	ground = new Ground(600,height,1200,20);
	}


function draw() {
	Engine.run(engine);
	background(23,40,50);
dust.display();
dustbin1.display();
//dustbin2.display();
//dustbin3.display();
ground.display();
//PAPER.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(dust.body,dust.body.position,{x:85,y:-85})
	}
}


