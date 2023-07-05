let height = window.innerHeight;
let width = window.innerWidth;
let page;
let forwards;
let backwards;
let firstPage;
let secondPage;
let thirdPage;
let forthPage;
let inTransitionF=false;
let inTransitionB=false;
let fadeA=255;


//function preload(){
//firstPage = loadImage('assets/example1.jpg');

//}
function setup() {
  createCanvas(width , height);
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
  thirdPage=loadImage('assets/example3.jpg')
  forthPage=loadImage('assets/example4.jpg')
  fadeA=255;
  //firstPage.resize(width,height);
 // firstPage.loadPixels();
}

function draw() {
  windowResize();  
  background(220);
  //First page
  if(page==0){
//console.log('opacityinitial'+fadeA);
//make forward transition from last page to first
if(inTransitionF==true){
    if(fadeA<256){
       fadeA++;
       let fadeB = fadeA*-1+255
       console.log('opacity'+fadeA);
       tint(255, fadeB);
       image(forthPage,width/2,height/2);
    }
    else{inTransitionF==false;
       console.log('now');
    }
   }
//make forward transition from previous page to this 
       //WORKS
    if(inTransitionB==true){
        if(fadeA<256){
            fadeA++;
            let fadeB = fadeA*-1+255
            console.log('opacity'+fadeB);
            tint(255, fadeB);
            image(secondPage,width/2,height/2);
             }
         else{inTransitionB=false;
        }            
     }    
    tint(255,fadeA);
    image(firstPage,width/2,height/2)
}
  
  //Second page
  if(page==1){
    //console.log('opacityinitial'+inTransitionF);
    //WORKS
    if(inTransitionF==true){
         if(fadeA<256){
            fadeA++;
            let fadeB = fadeA*-1+255
            console.log('opacity'+fadeA);
            tint(255, fadeB);
            image(firstPage,width/2,height/2);
         }
         else{inTransitionF==false;
            console.log('now');
         }
        }
    if(inTransitionB==true){
        if(fadeA<256){
            fadeA++;
            let fadeB = fadeA*-1+255
            console.log('opacity'+fadeB);
            tint(255, fadeB);
            image(thirdPage,width/2,height/2);
                }
         else{inTransitionB=false;
        }    
            
    }   
    tint(255,fadeA);
    image(secondPage,width/2,height/2)
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
    //console.log(page);
    inTransitionF=true;
    inTransitionB=false;
    fadeA=0;
    console.log('Forward'+page+fadeA);
}

function flipBackward(){
    page--; 
    //console.log(page);
    inTransitionF=false;
    inTransitionB=true;
    fadeA=0;
    console.log('Backward'+page+fadeA);
}


function interpolate(){

}