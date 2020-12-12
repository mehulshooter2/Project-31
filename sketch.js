const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var plinkos =[];
var particles = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Base(240,790,480,20);
  division1 = new Divisions(10,600,10,400);
  division6 = new Divisions(470,600,10,400);
  division2 = new Divisions(102,600,10,400);
  division3 = new Divisions(194,600,10,400);
  division4 = new Divisions(286,600,10,400);
  division5 = new Divisions(378,600,10,400);
  
  for (var p = 40; p <=width; p=p+50 ){

    plinkos.push(new Plinko(p,75,10));

  }

  for (var p = 10; p <=width; p=p+50 ){

    plinkos.push(new Plinko(p,150,10));

  }

  for (var p = 40; p <=width; p=p+50 ){

    plinkos.push(new Plinko(p,225,10));

  }

  for (var p = 10; p <=width; p=p+50 ){

    plinkos.push(new Plinko(p,300,10));

  }

  

  
}
function draw() {
  background(0); 
  Engine.update(engine); 
rectMode(CENTER);
  ground.display();  
  division1.display();
  division5.display();
  division2.display();
  division3.display();
  division4.display();
  division6.display();
  drawSprites();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%20===0){
    particles.push(new Particle(random(140,340),-600,10))
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

}
