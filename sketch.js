var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
  music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

  block3 = createSprite(495,580,200,30);
  block3.shapeColor = "green";

  block4 = createSprite(695,580,200,30);
  block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
  ball.velocityX = 5;
  ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
      ball.velocityX = 0;
      ball.velocityY = 0;

      music.stop();
    }

  if(ball.isTouching(block3)){
      ball.shapeColor = "green";
  }

  if(ball.isTouching(block4)){
    ball.shapeColor = "red ";
}

    drawSprites();
}
