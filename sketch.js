
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  paper=new Paper(100,600,10);
  ground = new Ground(1,680,800,20);
  leftSide=new Dustbin(550,579,20,100);
  bottomSide=new Dustbin(571,660,100,20);
  rightSide=new Dustbin(670,579,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(400);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.Display();
  bottomSide.Display();
  rightSide.Display();
  
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.Position,{x:15, y:-15});
  }
}
