var towerImg, tower;
var rocketImg, rocket;
var starImg, star, starsGroup;
var asteriod, asteriodImg, asteriodsGroup;

var gameState = "play"

function preload(){
    towerImg = loadImage("background1 img.PNG");
    rocketImg = loadImage("rocket 2 img.PNG");
    starImg = loadImage("star 2 img.PNG");
    asteriodImg = loadImage( "asteriod img.PNG");

}

function setup() {
    createCanvas(600,600);
    
    tower = createSprite(300,300);
    tower.scale = 3;
    tower.addImage(towerImg);
    tower.velocityY =5;
    
    rocketsGroup = new Group();
    asteriodsGroup = new Group();
    invisibleBlockGroup = new Group();
    
   rocket = createSprite(200,200,50,50);
   rocket.scale = 0.3;
   rocket.y-=3;
   rocket.addImage( rocketImg);
}

function draw() {
    background(255);
    if(tower.y > 300){
        tower.y = 200
      } 
      
    
        if(keyDown("left_arrow")){
            rocket.x = rocket.x - 4; 
        }
        if(keyDown("right_arrow")){
      
              rocket.x = rocket.x + 4;  
        }

        if(keyDown("up_arrow")){
      
            rocket.y = rocket.y - 4;   
      }  
        

  
  

    drawSprites();
    spawnAsteroids();

    if(asteriodsGroup.isTouching(rocket)){
      textSize(30);
      stroke("yellow");
      text("You lost",200,300)
      tower.velocityY=0;
      rocket.velocityY=0;
      asteriod.velocityY=0;
    }
   
}
function spawnAsteroids(){

  if (frameCount % 40 === 0) {
    var asteriod= createSprite(600,10,40,10);
    asteriod.x = Math.round(random(0,600));
    asteriod.addImage(asteriodImg);
    asteriod.scale = 0.20;
    asteriod.velocityY = 3;
    
     //assign lifetime to the variable
    
    
    //adjust the depth
    asteriod.depth = rocket.depth;
    rocket.depth = rocket.depth + 1;
    
    //add each cloud to the group
    asteriodsGroup.add(asteriod);
  }


}




