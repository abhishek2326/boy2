var boyImage, boy, boy_collided;
var path, boundary1, boundary2;
 var i;

function preload(){
 // pre-load images 
  pathImage = loadImage("path.png");
   runnerImage = loadImage("Runner-1.png","Runer-2.png");
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 boy = createSprite(50,100,40,70);
 boy.addAnimation("running", boyImage);
 boy.scale = 0.7
}
// Moving backGround
path = createSprite(200,200)
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

//code to reset the backGround
if(path.y > 400){
  path.y = height/2;
}

function draw() {
  background(0);

}

if(gameState === play){
 // move the path
 path.velocity.y = 4;
}
if(keyDown("mouse")&& boy.x >=100){
boy.velocityX = 13
}