
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(700,650,1400,20);
	paper = new Paper(50,200,70);
	dustbin1= new Dustbin1(940,520,20,200);
	dustbin2 = new Dustbin1(1255,520,20,200);
	dustbin3= new Dustbin(1100,520,350,200);

	Engine.run(engine);
  //console.log(engine);
}


function draw() {
	background(220);
  rectMode(CENTER);
  Engine.update(engine);
 
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-20});
}
	
}
