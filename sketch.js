const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg,bk
var b,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15
var p,p1
var bl
function preload() {
bg=loadImage("bowling-lanes-background_2c34652b-1312-4c6b-8bee-09b1365577e9_1200x1200.jpg")
b=loadImage("bottle.png")
p1=loadAnimation("Runner-1.png","Runner-2.png")
bl=loadImage("ball.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    balls=new Group ()
    p=createSprite(displayWidth/2,displayHeight/2+250)
    p.addAnimation("player",p1)
    p.scale=0.05
   // p.x=mouseX
   // p.y=mouseY
    b1=createSprite(645,150,10,10)
    b1.addImage(b)
    b1.scale=0.2
    b2=createSprite(675,150,10,10)
    b2.addImage(b)
    b2.scale=0.2
    b3=createSprite(705,150,10,10)
    b3.addImage(b)
    b3.scale=0.2
    b4=createSprite(735,150,10,10)
    b4.addImage(b)
    b4.scale=0.2
    b5=createSprite(765,150,10,10)
    b5.addImage(b)
    b5.scale=0.2
    b6=createSprite(660,170,10,10)
    b6.addImage(b)
    b6.scale=0.2
    b7=createSprite(690,170,10,10)
    b7.addImage(b)
    b7.scale=0.2
    b8=createSprite(720,170,10,10)
    b8.addImage(b)
    b8.scale=0.2
    b9=createSprite(750,170,10,10)
    b9.addImage(b)
    b9.scale=0.2
}

function draw(){
    background(bg);
    Engine.update(engine);
    if(keyDown("UP_ARROW")){
        p.y=p.y-2
    }
    if(keyDown("DOWN_ARROW")){
        p.y=p.y+2
    }
    if(keyDown("RIGHT_ARROW")){
        p.x=p.x+2
    }
    if(keyDown("LEFT_ARROW")){
        p.x=p.x-2
    }
    shoot()
    if(balls.isTouching(b1)||balls.isTouching(b2)||balls.isTouching(b3)||balls.isTouching(b4)||balls.isTouching(b5)||balls.isTouching(b6)||balls.isTouching(b7)||balls.isTouching(b8)||balls.isTouching(b9)){
        
    }
   drawSprites()
}
function shoot (){
    if(keyDown("s")){
    ball=createSprite(p.x,p.y,10,10)
    ball.addImage(bl)
    ball.scale=0.05
    ball.velocityY=-6
    ball.lifetime=80
    balls.add(ball)
    
    }
}