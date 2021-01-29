var player, comp
function setup() {
  createCanvas(800,400);
  comp = createSprite(400, 200, 50, 50);
  comp.shapeColor = "Red";
  player = createSprite(600,200,50,100);
  player.shapeColor = "Red";
}

function draw() {
  background("black");  
  player.x = World.mouseX;
  player.y =World.mouseY;
//50=50
  if(comp.x - player.x < comp.width/2 + player.width/2 && 
    player.x - comp.x < comp.width/2 + player.width/2 &&
    comp.y - player.y < comp.height/2 + player.height/2 && 
    player.y - comp.y < comp.height/2 + player.height/2 ){
  comp.shapeColor = "Yellow";
  player.shapeColor = "Lavender";
  }
  else {
    comp.shapeColor= "Red";
  player.shapeColor = "red";
  }
  console.log(comp.x - player.x);

  drawSprites();
}