function setup(){
    createCanvas(800,800)
}
function draw(){
    rectMode(CENTER);
    fill(150,50,0);
    //right leg
    rect(430,530,30,100);
    //left leg
    rect(370,530,30,100); 
    //head
    circle(400,275,75);
    //left arm
    circle(300,400,50);
    //right arm
    circle(500,400,50);
    //body
    fill(0)
    ellipse(400,400,150,200);
    //hair
    ellipse(400,250,100,80)
    //head
    fill(150,50,0);
    circle(400,275,75);
    //eyes
    fill(255)
    circle(385,265,14);
    circle(415,265,14);
    //iris
    fill(0,0,255);
    circle(385,265,4);
    circle(415,265,4);
    //mouth
    fill(255,0,0);
    ellipse(400,290,35,6);
    //nose
    fill(190,100,0);
    triangle(395,280,400,265,400,280);
}