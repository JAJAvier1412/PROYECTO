var ship, shiprunning;
var ground, groundImage;

function preload(){
 
  shiprunning = loadAnimation("ship-1.ping", "ship-2.png", "ship-3.png", "ship-4.png")

  groundImage = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  //Crear sprite del barco
ship = createSprite(80, 248, 20,20);
ship.addAnimation("runnning", shiprunning);

//Crear sprite del oceano 
ground = createSprite(200,200,400,400);
ground.addImage(groundImage);


}

function draw() {
 if (sea.x < 0) { 
ground.x = ground.with / 2
}

  drawSprites();
}