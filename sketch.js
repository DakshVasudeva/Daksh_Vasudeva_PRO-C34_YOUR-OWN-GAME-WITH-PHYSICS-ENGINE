let paddle, paddleImage, ball, ballImage;
let bricksGroup;
let brick, brickImg;


function preload(){
paddleImage=loadImage("paddle.png")
ballImage=loadImage("ball.png")
brickImg=loadImage("Brick.png")
}
function setup() {
  createCanvas(1100,550);
  paddle=createSprite(550, 500, 100, 50);
  paddle.addImage(paddleImage)
  ball=createSprite(550,430,50,50)
  ball.addImage(ballImage)
  ball.scale=0.5

  //ball.debug=true
  //paddle.debug=true
  paddle.setCollider("rectangle",0,0,200,50)
  ball.setCollider("circle",0,0,60)
  edges=createEdgeSprites()
  bricksGroup=new Group()
  brick=createSprite(550,40,70,20)
  brick.addImage(brickImg)
  bricksGroup.add(brick)
  brick.scale=0.5
  for (let i = 460; i < 700; i+=90) {
    brick=createSprite(i,70,70,20)
    brick.addImage(brickImg)
    brick.scale=0.5
    bricksGroup.add(brick)
  }
  for (let i = 370; i < 800; i+=90){
    brick=createSprite(i,100,70,20) 
    brick.addImage(brickImg)
    brick.scale=0.5
    bricksGroup.add(brick)
  }
  for (let i = 280; i < 900; i+=90) {
    brick=createSprite(i,130,70,20)
    brick.addImage(brickImg)
    brick.scale=0.5
    bricksGroup.add(brick)    
  }
  for (let i = 370; i < 800; i+=90) {
    brick=createSprite(i,160,70,20)
    brick.addImage(brickImg)
    brick.scale=0.5
    bricksGroup.add(brick)   
  }
  for (let i = 460; i < 700; i+=90) {
    brick=createSprite(i,190,70,20)
    brick.addImage(brickImg)
    brick.scale=0.5
    bricksGroup.add(brick)
  }
  brick=createSprite(550,220,70,20)
    brick.addImage(brickImg)
  brick.scale=0.5
  bricksGroup.add(brick)
  
}

function draw() {
  background(0);
  paddle.x=World.mouseX
  if (keyDown("SPACE")) {
    ball.velocityX=10
    ball.velocityY=25
  } 
  ball.bounceOff(paddle) 
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  drawSprites()
}