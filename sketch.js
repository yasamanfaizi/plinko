const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 800, 800, 10)

  for(var i= 0; i<=width;i+=80){
    divisions.push(new Divisions(i,650, 10, 300))
  }

  for(var i= 75; i<=width;i+=50){
    plinkos.push(new Plinko(i,75))
  }
  
  for(var i= 50; i<=width - 10;i+=50){
    plinkos.push(new Plinko(i,175))
  }

  for(var i= 75; i<=width;i+=50){
    plinkos.push(new Plinko(i,275))
  }

  for(var i= 50; i<=width - 10;i+=50){
    plinkos.push(new Plinko(i,375))
  }
}

function draw() {
  background(0); 
  Engine.update(engine)
  ground.display()
  for(var i= 0; i<divisions.length;i++){
    divisions[i].display()
  }

  for(var i= 0; i<plinkos.length;i++){
    plinkos[i].display()
  }

  if (frameCount%60 === 0){
    particles.push(new Particle(random(320,480), 10, 10))
  }
  
  for(var i= 0; i<particles.length;i++){
    particles[i].display()
  }

}