const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
let rope;
let watahmelon;
let watahmelon_connect;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:250,y:35})

  let fruit_options = {
    density : 0.2,
    restitution : 2

  };
  watahmelon = Bodies.circle(200,300,20,fruit_options)

  Composite.add(rope.body,watahmelon)
  console.log(watahmelon);
  watahmelon_connect = new Link(rope,watahmelon)


  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  ellipse(watahmelon.position.x,watahmelon.position.y,20,20);
  
  Engine.update(engine);
  
  console.log()

 
   
}
