const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var Divisions = [];
var divisionHeight=300;
var score =0;
gameState=1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(400,800,800,20);
  left = new ground(0, 400, 20, 800);
  right = new ground(800, 400, 20, 800);

   for(var k = 0; k <= width-10; k = k + 80) {
     Divisions.push(new divisions(k, 650, 10, divisionHeight));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(gameState===1){
   if(frameCount%60===0){
     particles.push(new Particle(Math.round(random(30, 770)), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     
   }
  }
   for (var l = 0; l < Divisions.length; l++) {
     
     Divisions[l].display();
   }
   Ground.display();
   left.display();
   right.display();
}

function keyPressed(){
  if(keyCode===32 && gameState===1){
    gameState=0;
  }
  if(keyCode===32 && gameState===0){
    gameState=1;
  }
}