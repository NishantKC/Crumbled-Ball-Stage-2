
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	Ball = new paper(200,350,70)
	basketD = new Bucket(800,450,200,20)
  basketR = new Basket(700,290,20,170)
	basketL = new Basket(900,290,20,170)
	ground = new Ground(500,390,1000,10)
   Engine.run(engine);
}


function draw() {
  
  background("grey");
  Ball.display()
  basketR.display()
  basketL.display()
  basketD.display()
  ground.display()
  

  keyPressed()
  
  drawSprites();
 
}
function keyPressed(){
if(keyWentDown("up")){
	  Matter.Body.applyForce(Ball.body,Ball.body.position,{x:150,y:-300})
  }	
}



