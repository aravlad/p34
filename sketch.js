var dog
var happyDog
var database
var foodS
var foodStock


function preload()
{
	dogNor=loadImage("images/dogImg.png")
	dogHap=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200, 200)
  dog.addImage(dogNor)
  dog.scale = 0.3

  foodStock = 20
  foodS = 20

  foodStock=database.ref('Food')
  foodStock.on("value", function(readStock){
     readStock = database.foodStock
  })

}


function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    foodS = foodS-1
    writeStock(foodS)
    dog.addImage(dogHap)
}

  if(keyWentDown(UP_ARROW)){
    dog.addImage(dogNor)
  }


  drawSprites();
  //add styles here
  textSize(20)
  fill("white")
  text("Food Left:"+foodS, 300, 150)
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })

}

