const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground,ball,ball2,ball1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }
ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

var ball_options = {
  restitution:1.5
}

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

var ball1_options = {
  restitution:1.0
}

ball1 = Bodies.circle(250,100,20,ball1_options);
World.add(world,ball1);

var ball2_options = {
  restitution:2.0
}

ball2 = Bodies.circle(150,100,20,ball2_options);
World.add(world,ball2);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode (CENTER);
  rect (200,390,400,20);

  ellipseMode (RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode (RADIUS)
  ellipse(ball1.position.x,ball1.position.y,20,20);

  ellipseMode (RADIUS)
  ellipse(ball2.position.x,ball2.position.y,20,20);
  drawSprites();
}