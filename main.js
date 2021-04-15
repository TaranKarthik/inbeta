img = "";

function preload(){
    img = loadImage('mobileandlappu.jfif');

}

function setup(){
    ctx = createCanvas(640,420);
    ctx.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    stroke("black");
    text("Apple Mac",165,236);
    text("keychron k6",165,357);
    text("iPhone",510,157);
    
    textSize(16);
    noFill();
    stroke("#ff3300");
    strokeWeight(2);
    //laptop
    rect(160,95,330,155);
    //phone
    rect(505,140,100,120);
    //keychron k6
    rect(160,260,265,80);
    
   
    

}