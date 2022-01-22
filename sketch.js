var score= 0;
var Fairy ,  Witch , Candy, Arrow, bg ;
var fairyImg , witchImg , candyImg, arrowImg, backgroundImg ;

var witchGroup, candyGroup, arrowGroup;

var life=3;
var score=0;
var gamestate=1;

function preload(){

  fairyImg= loadImage("fairy.png");
  witchImg=loadImage("witch.png");
  candyImg=loadImage("candy.png");
  arrowImg=loadImage("arrow.png");
  backgroundImg=loadImage(" background.jpg");

}

function setup(){
createCanvas(1200,600);

//form= new Form();

bg=createSprite(600,300);
bg.addImage(backgroundImg);
bg.scale=4;

Fairy=createSprite(100,400);
Fairy.addImage(fairyImg);
Fairy.scale=0.5;

witchGroup= new Group();
candyGroup= new Group();
arrowGroup= new Group();

heading= createElement("h1");
scoreboard= createElement("h1");


}

function draw () {
background(0)

Fairy.y=mouseY;

randomCandies();
randomWitches();
drawSprites();

heading.html("Life: "+life);
heading.style(`color:white`);
heading.position( displayWidth/2-400,30);

scoreboard.html("Score: "+score);
scoreboard.style(`color: white`);
scoreboard.position(displayWidth-400,30);




}

function randomCandies(){

  if(frameCount % 60 === 0){
    Candy=createSprite(1250,random (50,550));
    Candy.addImage(candyImg);
    Candy.velocityX=-2;
    Candy.scale=0.2;
    Candy.lifeTime=600;

    candyGroup.add(Candy);

  }
  
}

function randomWitches(){

  if(frameCount % 100 === 0) {
    Witch=createSprite(1250,random(50,550));
    Witch.addImage(witchImg);
    Witch.velocityX=-2;
    Witch.scale=0.2;
    Witch.lifeTime=600;

    witchGroup.add(Witch);
  }
    
}
