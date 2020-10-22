//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }


  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

var ball_options = {
  restitution: 1.1

}


  ball = Bodies.circle(200,200,20, ball_options);
  World.add(world,ball);

  console.log(ground);


 
}

function draw() {
  background(0);  

  Engine.update(engine);

  fill("lightgreen")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);


  rectMode(CENTER);
  fill("purple");
  rect(ground.position.x,ground.position.y,400,20);
  
  
}