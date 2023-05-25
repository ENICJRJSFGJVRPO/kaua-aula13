var garden,rabbit;
var gardenImg,rabbitImg;
var maça,appleImg;
var foia,orangeImg;
var foia,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);



rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  

  var select_sprites = Math.round(random(1,2,3));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApple();
    } else if(select_sprites == 2){
      createOrange();
    }else if(select_sprites == 3){
      createRed();
    }
  
  }
}

function createApple(){
maça = createSprite(random(50,350),100,10,10);
maça.addImage(appleImg);
maça.scale =0.07;
maça.velocity.y = 2;
maça.lifetime = 150;

}

function createOrange(){
foia = createSprite(random(50,350),100,10,10);
foia.addImage(orangeImg);
foia.scale =0.08;
foia.velocity.y = 2;
foia.lifetime = 150;

}

function createRed(){

otafoia = createSprite(random(50,350),100,10,10);
otafoia.addImage(redImg);
otafoia.scale =0.06;
otafoia.velocity.y = 2;
otafoia.lifetime = 150;

}



