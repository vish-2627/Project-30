const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
  //stand3 = new Stand(100,300,50,5);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //level one
  block17 = new Block(600,175,30,40);
  console.log(block1);
  block18 = new Block(630,175,30,40);
  block19 = new Block(660,175,30,40);
  block20 = new Block(690,175,30,40);
  block21 = new Block(720,175,30,40);
  block22 = new Block(750,175,30,40);
  block23 = new Block(780,175,30,40);
  //level two
  block24 = new Block(630,135,30,40);
  block25 = new Block(660,135,30,40);
  block26 = new Block(690,135,30,40);
  block27 = new Block(720,135,30,40);
  block28 = new Block(750,135,30,40);
  //level three
  block29 = new Block(660,95,30,40);
  block30 = new Block(690,95,30,40);
  block31 = new Block(720,95,30,40);
  //top
  block32 = new Block(690,55,30,40);
  

  polygon = Bodies.circle(150,250,20);
  World.add(world,polygon);

  chain = new SlingShot(polygon,{x:150,y:250});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,50,50);

  ground.display();
  stand1.display();
  stand2.display();
  //stand3.display();
  
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();  
  block32.display()

  chain.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}

function mouseReleased() {
  chain.fly();
}

 function keyPressed() {
  if(keyCode===32) {
      chain.attach(polygon);
  }
} 