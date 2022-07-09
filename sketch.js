var player,bg;
var fondo,cohete,meteorito,cohete_2;
var edge;
var obstaculo2;
var meteorito1;
var puntaje = 0 ;
var fondoInvisible;


function preload(){
fondo = loadImage("ESPACIO.jpg");
cohete = loadImage("111.png");
meteorito = loadImage("OIP1.jpg");
cohete_2 = loadImage("descarga1.png");
obstaculo2 = loadImage("OIP2.jpg");
moneda = loadImage("moneda.jpg");
}


function setup(){
  createCanvas(windowWidth,windowHeight);

 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(fondo)
bg.scale = 1.1
edge = createEdgeSprites();


meteorito1 = createSprite(600,250,70,70);
meteorito1.addImage("obstaculo",obstaculo2);
meteorito1.scale = 0.4;
meteorito1.setVelocity(30,-10);


player = createSprite(displayWidth-1150, displayHeight/2, 70, 70);
   player.addImage(cohete)
   player.scale = 0.5
  // player.debug = true
   player.setCollider("rectangle",0,0,300,300)



obstaculo = createSprite(500,250,70,70);
obstaculo.addImage("meteoro",meteorito);
obstaculo.scale = 0.4;
obstaculo.setVelocity(10,20);

fondoInvisible = createSprite(displayWidth/2-20,displayHeight/2-40,1500,1500)
fondoInvisible.scale = 1.1
fondoInvisible.visible = false;


}


function draw() {
    background(0); 
    if(player.isTouching(fondoInvisible)){
      puntaje = puntaje+1;
    }
   if(player.isTouching(edge)){
    player.bounceOff(edge);
   }
   if(obstaculo.isTouching(edge)){
    obstaculo.bounceOff(edge);
   }
   if(meteorito1.isTouching(edge)){
    meteorito1.bounceOff(edge);
   }
   if(player.isTouching(obstaculo)|| player.isTouching(meteorito1)){
    player.visible = false
    gameover();
   }
 
   //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches. length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(cohete_2)
   
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(cohete)
}

  
drawSprites();
fill("white");
textSize(30);
text("puntaje "+puntaje,50,50);
  
  }
  function gameover(){
    fill("white");
    textSize(70);
    text("GAMEOVER puntaje = "+puntaje,displayWidth-1150, displayHeight/2);
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    bg.addImage(fondo);
    bg.scale = 1.1;
    edge = createEdgeSprites();
    
  pop();
  hide();
  if(player.isTouching(edge)){
    player.bounceOff(edge);
   }
   if(obstaculo.isTouching(edge)){
    obstaculo.bounceOff(edge);
   }
   if(meteorito1.isTouching(edge)){
    meteorito1.bounceOff(edge);
   }
   if(player.isTouching(obstaculo)|| player.isTouching(meteorito1)){
    player.visible = false
    gameover();
   }
 
   //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches. length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(cohete_2)
   
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(cohete)
}
push();
  }