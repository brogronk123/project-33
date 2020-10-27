var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var gameState = "play";
var turns = 5;
var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
  textSize(20);
  text("500",260,height-divisionHeight/2);
  text("500",20,height-divisionHeight/2);
  text("500",110,height-divisionHeight/2);
  text("500",190,height-divisionHeight/2);
  text("100",340,height-divisionHeight/2);
  text("100",420,height-divisionHeight/2);
  text("100",500,height-divisionHeight/2);
  text("200",590,height-divisionHeight/2);
  text("200",650,height-divisionHeight/2);
  text("200",740,height-divisionHeight/2);
  text("Score : "+score,20,30);
  text("Turns remaining : "+turns,595,30);
  Engine.update(engine);
   
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
      particle.display();
       
       if (particle.body.position.y>760){
             if (particle.body.position.x < 300) {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
              }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301) {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

              }
             else if (particle.body.position.x < 800 && particle.body.position.x > 601){
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

              }      
             
        }
 
     }
  if(count >= 5){
    textSize(80);
    text("GAME OVER!",200,400);
  }
}
function mousePressed(){
  if(count < 5){
      count++;
      turns = 5-count;
      particle=new Particle(mouseX, 10, 10, 10); 
  }
}