var movingrect;
var fixedrect;
var rect3;
var rect4;
var rect5;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="black";
  movingrect=createSprite(300,150,20,40,);
  movingrect.shapeColor="green"

  rect3=createSprite(200,150,30,40,);
  rect3.shapeColor="brown"

  rect4=createSprite(250,250,10,40,);
  rect4.shapeColor="blue"

  rect5=createSprite(100,250,20,40,);
  rect5.shapeColor="yellow"
}

function draw() {
  background(220,50,30); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  console.log(movingrect.x-fixedrect.x)
  if(isTouching(movingrect,fixedrect)){

    movingrect.shapeColor="orange";
    fixedrect.shapeColor="pink";}
   
   else if(isTouching(movingrect,rect3)){

      movingrect.shapeColor="cyan";
      rect3.shapeColor="white";}

      else if(isTouching(movingrect,rect4)){

        movingrect.shapeColor="lightblue";
        rect4.shapeColor="magenta";}

        else if(isTouching(movingrect,rect5)){

          movingrect.shapeColor="silver";
          rect5.shapeColor="darkgreen";}
     else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="black";
    rect3.shapeColor="brown";
    rect4.shapeColor="blue";
    rect5.shapeColor="yellow";
  }

  drawSprites();
}
