const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var ampm;

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
   
   if(hour >=04 && hour<=06){
       bg="sunrise1.png"

    } else if(hour >=06 && hour<=08){
    bg="sunrise2.png"

} else if(hour >=08 && hour<=10){
    bg="sunrise4.png"

}else if(hour >=10 && hour<=12){
    bg="sunrise4.png"

} else if(hour >=12 && hour<=14){
    bg="sunrise5.png"

}else if(hour >=14 && hour<=16){
    bg="sunrise7.png"

}else if(hour >=16 && hour<=18){
    bg="sunrise10.png"

}else if(hour >=18 && hour<=20){
    bg="sunrise11.png"

}else if(hour >=20 && hour<=22){
    bg="sunrise12.png"

}else if(hour >=22 && hour<=24){
    bg="sunrise12.png"

}else if(hour ==0 && hour<=03){
    bg="sunrise11.png"

}


   backgroundimage = loadImage(bg);
    console.log(hour);

}

function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}