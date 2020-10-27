var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 800, 50, 50);
  movingRect.velocityY = -5;
  fixedRect = createSprite(400,100,50,50);
  fixedRect.velocityY = +5;
  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background(25,255,255);  
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    &&movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}