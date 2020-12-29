const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, chain;

function preload() {
  
}

function setup() 
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth, windowHeight);

  //create the ground
  ground = new Ground(windowWidth / 2, windowHeight + 10, windowWidth, 60);

  //create the boxes
  box1 = new Box(windowWidth - 300, windowHeight - 65, 80, 90);
  box2 = new Box(windowWidth - 380, windowHeight - 65, 80, 90);
  box3 = new Box(windowWidth - 460, windowHeight - 65, 80, 90);
  box4 = new Box(windowWidth - 540, windowHeight - 65, 80, 90);
  box5 = new Box(windowWidth - 300, windowHeight - 155, 80, 90);
  box6 = new Box(windowWidth - 380, windowHeight - 155, 80, 90);
  box7 = new Box(windowWidth - 460, windowHeight - 155, 80, 90);
  box8 = new Box(windowWidth - 540, windowHeight - 155, 80, 90);
  box9 = new Box(windowWidth - 300, windowHeight - 245, 80, 90);
  box10 = new Box(windowWidth - 380, windowHeight - 245, 80, 90);
  box11 = new Box(windowWidth - 460, windowHeight - 245, 80, 90);
  box12 = new Box(windowWidth - 540, windowHeight - 245, 80, 90);
  box13 = new Box(windowWidth - 300, windowHeight - 335, 80, 90);
  box14 = new Box(windowWidth - 380, windowHeight - 335, 80, 90);
  box15 = new Box(windowWidth - 460, windowHeight - 335, 80, 90);
  box16 = new Box(windowWidth - 540, windowHeight - 335, 80, 90);
  box17 = new Box(windowWidth - 300, windowHeight - 425, 80, 90);
  box18 = new Box(windowWidth - 380, windowHeight - 425, 80, 90);
  box19 = new Box(windowWidth - 460, windowHeight - 425, 80, 90);
  box20 = new Box(windowWidth - 540, windowHeight - 425, 80, 90);

  //create the ball
  ball = new Ball(130, 430, 40, 40);

  //create the chain
  chain = new Chain(ball.body, {x : 130, y : 430});
  
}

function draw() {
    background(255, 150, 0);
    Engine.update(engine);
    ground.display()
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
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    chain.display();
    stroke(0, 85, 255);
    strokeWeight(2);
    fill(0, 196, 255);
    textSize(20);
    text("Press space to get a chance again", 10, 30);
    text("Press R to set the blocks on position", 10, 70);
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});
}

function mouseReleased() {
   chain.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    chain.attach(ball.body);
    Matter.Body.setPosition(ball.body, {x : 130, y : 430});
  }

  if (keyCode == 82) {
    Matter.Body.setPosition(box1.body, {x : windowWidth - 300, y : windowHeight - 65});
    Matter.Body.setPosition(box2.body, {x : windowWidth - 380, y : windowHeight - 65});
    Matter.Body.setPosition(box3.body, {x : windowWidth - 460, y : windowHeight - 65});
    Matter.Body.setPosition(box4.body, {x : windowWidth - 540, y : windowHeight - 65});
    Matter.Body.setPosition(box5.body, {x : windowWidth - 300, y : windowHeight - 155});
    Matter.Body.setPosition(box6.body, {x : windowWidth - 380, y : windowHeight - 155});
    Matter.Body.setPosition(box7.body, {x : windowWidth - 460, y : windowHeight - 155});
    Matter.Body.setPosition(box8.body, {x : windowWidth - 540, y : windowHeight - 155});
    Matter.Body.setPosition(box9.body, {x : windowWidth - 300, y : windowHeight - 245});
    Matter.Body.setPosition(box10.body, {x : windowWidth - 380, y : windowHeight - 245});
    Matter.Body.setPosition(box11.body, {x : windowWidth - 460, y : windowHeight - 245});
    Matter.Body.setPosition(box12.body, {x : windowWidth - 540, y : windowHeight - 245});
    Matter.Body.setPosition(box13.body, {x : windowWidth - 300, y : windowHeight - 335});
    Matter.Body.setPosition(box14.body, {x : windowWidth - 380, y : windowHeight - 335});
    Matter.Body.setPosition(box15.body, {x : windowWidth - 460, y : windowHeight - 335});
    Matter.Body.setPosition(box16.body, {x : windowWidth - 540, y : windowHeight - 335});
    Matter.Body.setPosition(box17.body, {x : windowWidth - 300, y : windowHeight - 425});
    Matter.Body.setPosition(box18.body, {x : windowWidth - 380, y : windowHeight - 425});
    Matter.Body.setPosition(box19.body, {x : windowWidth - 460, y : windowHeight - 425});
    Matter.Body.setPosition(box20.body, {x : windowWidth - 540, y : windowHeight - 425});
  }

}