//Create variables here

var dog , happyDog; 
var foodS , foodStock;
var database; 


function preload()
{
	//load images here
 this.image=loadImage(dogImg.png , dog1Img.png);
 var createSprite = dog  
 

 foodStock=database.ref('food');
  foodStock.on("value",redstock);
}

function setup() {
	createCanvas(500,500); 
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Img.png);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


