const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ball;
function setup() {
  createCanvas(1366,600);

  engine = Engine.create();
  world = engine.world;
 
  ground=new Ground(700,595,1400,10);
  
  shot=new Shot(400,200,25);

 // bottom
  box1=new Box(1100,585,400,20);
  box2=new Box(1100,575,300,20);
  box3=new Box(1100,565,200,20);
  box4=new Box(1100,555,100,20);
  box5=new Box(1100,545,50,20);
  box6=new Box(1100,535,25,20);

  slingshot = new SlingShot(shot.body,{x:200, y:400});
  Engine.run(engine);
}

function draw() {
  background(55,247,19); 
  ground.display();
  shot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shot.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
      slingshot.fly()
  }

  function keyPressed(){
  if(keyCode===32){
    slingshot = new SlingShot(shot.body,{x:200, y:400});
  }
  }