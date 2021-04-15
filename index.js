img = "";

function preload(){
    img = loadImage('livroom.jpg');

}

function setup(){
    ctx = createCanvas(640,420);
    ctx.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    stroke("black");
    text("Sofa",165,236);
    text("Painting",225,100);
    text("Window",360,100);
    textSize(16);
    noFill();
    stroke("#ff3300");
    strokeWeight(2);
    //sofa
    rect(160,220,315,150);
    //painting
    rect(220,80,100,120);
    //window
    rect(355,80,100,120);
    //catcus
    rect(510,150,110,270);
    

}