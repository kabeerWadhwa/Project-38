var trex, trex_running, trex_collided,cloud,cloudImage,cloudGroup,obstacleGroup, gameState, playerDistance;
var ground, invisibleGround, groundImage,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight/2 + 10);
  
  trex = createSprite(displayWidth/4 - 80,displayHeight/2 - 40,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(displayWidth/3 + 10,displayHeight/5 + 20,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  background(rgb(57,89,200));
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(playerDistance===10000){
    gameState===END
  }
  
  spawnClouds();
  
  spawnObstacles();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds() {
  if(World.frameCount% 100 === 0) {
  cloud = createSprite(590,40,20,20);
  cloud.addImage(cloudImage);
  cloud.velocityX = -2;
  trex.depth = cloud.depth;
  cloud.lifetime = 300;
  cloud.y = Math.round(random(30,160))
  cloudGroup.add(cloud);
  }
}

function spawnObstacles() {
 if(World.frameCount% 150 === 0) {
  obstacle = createSprite(590,160,20,20);
  obstacle.velocityX = -2;
  var rand = Math.round(random(1,6));
   switch(rand) {
     case 1: obstacle.addImage(obstacle1); 
       break;
       case 2: obstacle.addImage(obstacle2);
       break;
       case 3: obstacle.addImage(obstacle3);
       break;
       case 4: obstacle.addImage(obstacle4);
       break;
       case 5: obstacle.addImage(obstacle5);
       break;
       case 6: obstacle.addImage(obstacle6);
   }
   obstacleGroup.add(obstacle);
   obstacle.scale = 0.6;
 }
}