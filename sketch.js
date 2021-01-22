var rect,rect2;
function setup() {
  createCanvas(800,400);
  rect=createSprite(400, 200, 50, 50);
  rect.shapeColor="blue";
  rect2=createSprite(200,200,50,50);
  rect2.shapeColor="red";
  rect2.velocityX=2;
  rect3=createSprite(300,200,50,50);
  rect3.shapeColor="orange";
  rect3.velocityX=-2;
  rect4=createSprite(100,200,50,50);
  rect4.shapeColor="red";
  rect4.velocityX=2;
  rect5=createSprite(600,200,50,50);
  rect5.shapeColor="green";
  rect5.velocityX=-2;
  rect6=createSprite(700,200,50,50);
  rect6.shapeColor="red";

}

function draw() {
  background(0);  
  rect.x=mouseX;
  rect.y=mouseY;

  
if(isTouching(rect,rect4)){
rect.shapeColor="blue";
rect4.shapeColor="blue";
}else{
  rect.shapeColor="blue";
  rect4.shapeColor="red";
}

if(isTouching(rect,rect5)){
  rect.shapeColor="blue";
  rect5.shapeColor="blue";
  }else{
    rect.shapeColor="blue";
    rect5 .shapeColor="green";
  }

 bounceoff(rect4,rect5);
 bounceoff(rect2,rect3);

  drawSprites();
}


