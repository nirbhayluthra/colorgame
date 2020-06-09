var numofsq= 6;
var colors = generatecolor(numofsq);
var squares =document.querySelectorAll(".square");
var picked=pickcolor();
var colordisplay =document.getElementById("colordisplay");
colordisplay.textContent = picked;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebutton =document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0;i<modebutton.length;i++){
        modebutton[i].addEventListener("click",function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
         this.classList.add("selected"); 
         if(this.textContent==="Easy"){
             numofsq=3;
         }
         else{
             numofsq=6;
         }
         reset();
    
        });
    }

    for(var i=0; i<squares.length; i++){

        //add click
       squares[i].addEventListener("click",function(){
       var clickedcolor= this.style.backgroundColor;
      
     
       if(clickedcolor===picked){
         message.textContent="correct!!";
         resetbutton.textContent="Play Again?"
         changecolor(clickedcolor);
         h1.style.backgroundColor=clickedcolor;
       }
       else{
           this.style.backgroundColor="#232323";
           message.textContent="Try Again";
       }
       });
     }
     reset();
}



function reset(){
    colors=generatecolor(numofsq);

    picked=pickcolor();

    colordisplay.textContent=picked;
    message.textContent="";
    resetbutton.textContent="New Colors";
    for(var i=0;i<squares.length;i++){
       if(colors[i]){
        squares[i].style.display="block";

        squares[i].style.backgroundColor = colors[i];
       }
       else{
           squares[i].style.display="none";
       }
    }
    h1.style.background="steelblue";
}
// easybtn.addEventListener("click",function(){
//  easybtn.classList.add("selected");
//  hardbtn.classList.remove("selected");
//  numofsq=3;
//  colors=generatecolor(numofsq);
//  picked=pickcolor();
//  colordisplay.textContent=picked;
//  for(var i=0;i<squares.length;i++){
//      if(colors[i]){
//          squares[i].style.background=colors[i];
//      }
//      else{
//          squares[i].style.display="none";
//      }
//  }
// });
// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numofsq=6;
//     colors=generatecolor(numofsq);
//     picked=pickcolor();
//     colordisplay.textContent=picked;
//     for(var i=0;i<squares.length;i++){
//             squares[i].style.background=colors[i];
//             squares[i].style.display="block";
//     }
// });
resetbutton.addEventListener("click",function(){
    reset();
});


function changecolor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor= color;
    }
}

function pickcolor(){
  var random= Math.floor(Math.random() *colors.length);
 return colors[random];
}

function generatecolor(num){
    var arr=[];
  for(var i=0;i<num;i++){
   arr.push(randomcolor());
  }

    return arr;
}

function randomcolor(){
  var r= Math.floor(Math.random() * 256);
  var g= Math.floor(Math.random() * 256);
  var b= Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}