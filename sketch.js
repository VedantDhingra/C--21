var fixedRect,movingRect;
var wall1,wall2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor  = "green";
  movingRect.debug = true;

  wall1 = createSprite(100,100,50,50);
  wall1.shapeColor = "blue";
  wall1.debug = true;

  wall2 = createSprite(200,200,50,50);
  wall2.shapeColor = "yellow";
  wall2.debug = true;

  
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,wall1)){

    movingRect.shapeColor = "red";
    wall1.shapeColor = "red";
    
  }
  else{
    movingRect.shapeColor = "green";
    wall1.shapeColor = "green";
  }

  

  
  drawSprites();
}


function isTouching(object1,object2){
  if(object1.x-object2.x <object2.width/2 + object1.width/2
    && object2.x-object1.x <object2.width/2 + object1.width/2
    && object1.y-object2.y <object2.height/2 + object1.height/2
    && object2.y-object1.y <object2.height/2 + object1.height/2){
    return true;
    
  }
  else{
    return false;
  }


}