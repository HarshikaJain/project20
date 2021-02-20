var garden;
var tom1, tom2,tom3;
var jerry1, jerry2, jerry3;

function preload() {
garden = loadImage("garden.png");
jerry1 = loadImage("jerryOne");
jerry2 = loadImage("jerryThree","jerryTwo");
jerry3 = loadImage("jerryFour");
tom1 = loadImage("tomOne");
tom2 = loadImage("tomTwo","tomThree");
tom3 = loadImage("tomFour");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(800,600,10,10);
    tom.addImage(tom1);
    tom.scale = 0.15;
    jerry = createSprite(100,600,10,10);
    jerry.addImage(jerry1);
    jerry.scale = 0.15;
    garden = createSprite(450,350,10,10);
    garden.addImage(gardenImg);
    // text(mouse.X + ',' + mouseY,10,45);
}

function draw() {

    background("black");
    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage",tomImg3);
        tom.changeAnimation("tomLastImage");
        tom.x = 200;
        tom.y = 600;
        
        jerry.addAnimation("jerryLastImage",jerryImg3);
        jerry.changeAnimation("jerryLastImage");
        }

    drawSprites();
   text(mouse.X + ',' + mouseY,10,45);
    }
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("mouseTeasing",jerryImg2);
        jerry.changeAnimation("mouseTeasing");
    }
}