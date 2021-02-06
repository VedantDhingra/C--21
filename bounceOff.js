var fixedRect,movingRect;
var wall1,wall2;

function setup() {
  createCanvas(1200,800);
 /* fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor  = "green";
  movingRect.debug = true;
*/

  wall1 = createSprite(100,100,50,250);
  wall1.shapeColor = "blue";
  wall1.debug = true;
  wall1.velocityX = 5;

  wall2 = createSprite(900,200,50,250);
  wall2.shapeColor = "yellow";
  wall2.debug = true;
  wall2.velocityX = -5;
  

  
}

function draw() {
  background(0,0,0); 
  
  bounceOff(wall1,wall2);
  
  drawSprites();
}


function bounceOff(object1,object2){
  if(object1.x-object2.x <object2.width/2 + object1.width/2
    && object2.x-object1.x <object2.width/2 + object1.width/2){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
    
  }
  
  if( object1.y-object2.y <object2.height/2 + object1.height/2
    && object2.y-object1.y <object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY *(-1);
        object2.velocityY = object2.velocityY * (-1);
        
  }


}