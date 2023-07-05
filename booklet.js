let height = window.innerHeight;
let width = window.innerWidth;
let page;
let forwards;
let backwards;
let firstPage;
let secondPage;
let fadeA;
let fadeB;


//function preload(){
//firstPage = loadImage('assets/example1.jpg');

//}
function setup() {
  createCanvas(width , height);
  fade=255;
  imageMode(CENTER);
  page = 0;
  forwards=createButton('forward');
  forwards.position(width-100, window.innerHeight-100);
  forwards.mousePressed(flipForward);
  backwards=createButton('backwards');
  backwards.position(100, window.innerHeight-100);
  backwards.mousePressed(flipBackward);
  firstPage = loadImage('assets/example1.jpg')
  secondPage=loadImage('assets/example2.jpg')
  //firstPage.resize(width,height);
 // firstPage.loadPixels();
}

function draw() {
  windowResize();  
  background(220);
  if(page==0){
  image(firstPage,width/2,height/2);
  tint(255,255,255,255);
  }
  if(page==1){
    for (let i=0;i<255;i++){

    }
    image(firstPage,width/2,height/2);
    image(secondPage,width/2,height/2);
  }
  //ellipse(100, window.innerHeight-100, 55, 55);
  //ellipse(width-100, window.innerHeight-100, 55, 55);
}


function windowResize(){
    if (height==!window.innerheigth||width==!window.innerWidth){
        resizeCanvas(window.innerWidth, window.innerHeight);
        height = window.innerHeight;
        width = window.innerWidth;
        console.log("Now");
    }
}

function flipForward(){
    page++;
    console.log(page);

}

function flipBackward(){
    page--; 
    console.log(page);
}


function interpolate(){

}