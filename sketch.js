const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 1200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,475,10));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175,10));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275,10));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375,10));
    }

    for (var j = 50; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,575,10));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,675,10));
    }

    for (var j = 50; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,775,10));
    }
}
 
function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  if(frameCount % 30 === 0){
    particle = new Particles(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
  
  for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();  
 }
}
