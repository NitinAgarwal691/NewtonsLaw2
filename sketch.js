const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,bob1,bob2,bob3,bob4,bob5;
var joint1,joint2,joint3,joint4,joint5;

function setup() {
    createCanvas(600,900)
    engine=Engine.create();
    world=engine.world;
    bob1=new Pendulum(475,60,30);
    joint1=new Sling(bob1.body,{x:475,y:60});
    bob2=new Pendulum(115,60,30);
    joint2=new Sling(bob2.body,{x:115,y:60});
    bob3=new Pendulum(205,60,30);
    joint3=new Sling(bob3.body,{x:205,y:60});
    bob4=new Pendulum(295,60,30);
    joint4=new Sling(bob4.body,{x:295,y:60});
    bob5=new Pendulum(385,60,30);
    joint5=new Sling(bob5.body,{x:385,y:60});
}

function draw() {
    background(0);
    // mouseDragged();
    Engine.update(engine);
    bob1.display();
    joint1.display();
    bob2.display();
    joint2.display();
    bob3.display();
    joint3.display();
    bob4.display();
    joint4.display();
    bob5.display();
    joint5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}