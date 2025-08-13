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
let yellowDuck, pinkDuck, yellowPig, pinkPig, blueDuck, iDuck, sDuck; // playable characters
let button;

let yellowDuckImg, pinkDuckImg, yellowPigImg, pinkPigImg, blueDuckImg, iDuckImg, sDuckImg; // images

function preload(){
    pinkDuckImg = loadImage("https://i.ibb.co/5KgQ0Lr/pink-duck.webp");
    
}