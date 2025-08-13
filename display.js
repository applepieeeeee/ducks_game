// display.js


// VARIABLES 
let xPos = 100;
let yPos = 100;
let score = 0;
let counter = 0;
let point = 3;

let knifSpeed = 1;
let knifeSpeed = 2.9;
let level = 1;

let up, down, left, right; // directions
let start = true;
let pause = false;
let displayMoosh = true;;
let levelTwoBegin = false;
let white = true;
let moveMoosh = true;
let dir = 0;

let duck, knife, coin, knif, mushRoom; // sprites lmao
let yellowDuck, pinkDuck , pinkPig, blueDuck, iDuck, sDuck; // playable characters
// yellow pig img is bugging for some reason
let button;

let yellowDuckImg, pinkDuckImg, pinkPigImg, blueDuckImg, iDuckImg, sDuckImg; // images



// PRELOAD
function preload(){
    pinkDuckImg = loadImage("https://i.ibb.co/5KgQ0Lr/pink-duck.webp");
    pinkPigImg = loadImage("https://i.ibb.co/z68WT4g/pig.webp");
    yellowDuckImg = loadImage("http://cdn.shopify.com/s/files/1/1755/5355/collections/Store_Icon_500_Shmolo.png?v=1644855525");
    blueDuckImg = loadImage("https://i.ibb.co/Sxp9DnP/blueDuck.webp");
    iDuckImg = loadImage("https://i.ibb.co/RvzF6KT/Store-Icon-501-Shmolo.webp");
    sDuckImg = loadImage("https://i.ibb.co/V2t7J7J/strawberry-Jam.webp");

}

// SETUP FUNCTION
function setup() {
    createCanvas(600,600);
    textSize(30);
    textAlign(CENTER);
    fill(255);

    duck = createSprite(100,100);
    duck.addImage(yellowDuckImg);
    
    knife = createSprite(400,400);
    knife.addImage(loadImage("https://www.drawingwars.com/assets/img/cartoons/how-to-draw-a-knife-step-by-step/how-to-draw-a-knife-step-by-step_transparent.png?ezimgfmt=ngcb1/notWebP"));
    knife.scale = 0.6;
    
    coin = createSprite(500, 500);
    coin.addImage(loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/60815/golden-dollar-coin-clipart-xl.png"));
    coin.scale = 0.4;

    knif = createSprite(0, 2);
    knif.addImage(loadImage("https://www.drawingwars.com/assets/img/cartoons/how-to-draw-a-knife-step-by-step/how-to-draw-a-knife-step-by-step_transparent.png?ezimgfmt=ngcb1/notWebP"));
    knif.scale = 0.6;

    mushRoom = createSprite(random(width), random(height));
    mushRoom.addImage(loadImage("https://www.pngkey.com/png/full/14-146993_basket-clipart-mushroom-cartoon-mushroom.png"));
    mushRoom.scale = 0.5;

    // Character selection sprites
    yellowDuck = createSprite(240, 375.2);
    yellowDuck.addImage(yellowDuckImg);

    pinkDuck = createSprite(360, 375.2);
    pinkDuck.addImage(pinkDuckImg);

    yellowPig = createSprite(240, 500);
    yellowPig.addImage(yellowPigImg);

    pinkPig = createSprite(360, 500);
    pinkPig.addImage(pinkPigImg);

    blueDuck = createSprite(300, 436.9);
    blueDuck.addImage(blueDuckImg);
    blueDuck.scale = 0.32;

    iDuck = createSprite(500, 436.9);
    iDuck.addImage(iDuckImg);

    sDuck = createSprite(100, 436.9);
    sDuck.addImage(sDuckImg);

    // Button
    button = createSprite(300, 70, 87, 87);
    button.shapeColor = color(161, 237, 225);
}

function draw() {
    if (white) {
        background(212, 186, 207);
        button.shapeColor = color(161, 237, 225);
    } else {
        background(161, 237, 225);
        button.shapeColor = color(212, 186, 207);
    }

    if (duck.overlap(knife) || (duck.overlap(knif) && score >= point)){
        background(166, 186, 178);
        fill(73, 84, 72);
        textSize(60);
        text("you died lol", width/2, 100);
        textSize(30);
        text("space to return to starting screen", width/2, 300);
        counter++;

        if (counter == 240){
            start = true;
        }
    } else if (!start && !pause){
        duck.position.x = xPos;
        duck.position.y = yPos;

        if (up ) yPos -= 10;
        if (down) yPos += 10;
        if (left) xPos -= 10;
        if (right) xPos += 10;

        if (duck.overlap(coin)){
            coin.position.x = random(width);
            coin.position.y = random(height);
            score++;
        }
    }

    if (score >= 5 && moveMoosh){
        mushRoom.position.x = random(width);
        mushRoom.position.y = random(height);
        moveMoosh = false;
    }

    if (score >= 5 && displayMoosh){
        drawSprite(mushRoom);
        if (duck.overlap(mushRoom)){
            knifeSpeed = 1;
            displayMoosh = false;
        }
    }

    knife.attractionPoint(knifeSpeed, duck.position.x, duck.position.y);

    if (score >= point){
        knif.attractionPoint(knifSpeed, duck.position.x, duck.position.y);
        drawSprite(knif);
    }
}