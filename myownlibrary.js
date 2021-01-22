function isTouching(rect,rect2){
    if(rect.x-rect2.x<rect2.width/2+rect.width/2&&rect2.x-rect.x<rect.width/2+rect2.width/2
      &&rect.y-rect2.y<rect.height/2+rect2.height/2&&rect2.y-rect.y<rect.height/2+rect2.height/2){
     return true;
    }
    else {
      
    return false;
    } 
  }
  
  function bounceoff(r1,r2){
  if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r2.width/2+r1.width/2){
  r1.velocityX=r1.velocityX*(-1);
  r2.velocityX=r2.velocityX*(-1);
  }
  if(r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r2.height/2+r1.height/2){
  r1.velocityY=r1.velocityY*(-1);
  r2.velocityY=r2.velocityY*(-1);
  }
  }