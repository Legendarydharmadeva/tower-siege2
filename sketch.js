const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function preload() {
}




function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

 //level one
  box1 = new Box(330,235,30,40);
  box1.shapeColor("green");
  box2 = new Box(360,235,30,40);
  box2.shapeColor("lime");
  box3 = new Box(390,235,30,40);
  box3.shapeColor("brown");
  box4 = new Box(420,235,30,40);
  box4.shapeColor("yellow");
  box5 = new Box(450,235,30,40);
  box5.shapeColor("pink");

  //level two
  box6 = new Box(360,195,30,40);
  box6.shapeColor("orange");
  box7 = new Box(390,195,30,40);
  box7.shapeColor("red");
  box8 = new Box(420,195,30,40);
  box8.shapeColor("black");

  //level three
  box9 = new Box(390,155,30,40);
  box9.shapeColor("purple");
  box10 = new Box(420,155,30,40);
  box10.shapeColor("blue");





}




function draw(){
  background(backgroundImg);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();



}




function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
     slingshot.attach(Polygon.body);
  }
}