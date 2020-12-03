var object1, fixrect, gameobject1, gameobject2, gameobject3, gameobject4;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(600, 400, 50, 80);
  fixrect = createSprite(500,400,80,30);
  movingrect.shapeColor = "green";
  fixrect.shapeColor = "green";
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "blue";

  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "blue";

  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "blue";

  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "blue";
}

function draw() {
  background(0); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

if(isTouching(gameobject2, movingrect)){

  movingrect.shapeColor = "red";
  fixrect.shapeColor = "red";
}

else{

  movingrect.shapeColor = "green";
  fixrect.shapeColor = "green";
}

drawSprites();
}

function isTouching(object1, object2){

  if(object1.x - object2.x < object2.width / 2 + object1.width / 2 && 
    object2.x - object1.x < object2.width / 2 + object1.width / 2 && 
    object1.y - object2.y < object2.height / 2 + object1.height / 2 && 
    object2.y - object1.y < object2.height / 2 + object1.height / 2){

return true;
}

else{

  return false;
}
 }