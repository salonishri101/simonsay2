// let arr=[];

// let box=document.querySelectorAll(".box");

// box.forEach(function(box){
//     box.addEventListener("click",function(){
//         let currentBox=this;
//         let currentBoxId=currentBox.getAttribute("id");
//          arr.push(currentBoxId);
//          console.log(arr);
//         console.log(currentBoxId + " is clicked");
        
//         this.classList.add("active");
//         setTimeout(function(){  
//          currentBox.classList.remove("active");
//         },300)




//     })
// })


let gameoverAudio = new Audio("fahh.mp3");
let arr=[]; 
let usersequence=[];
let gamesequence=[];


let h1=document.querySelector("h1");

let gameStarted=false;
let level =0;

function flash( hello){

hello.classList.add("active");
    setTimeout(function(){
        hello.classList.remove("active");
    },300)

}



function restart(){
h1.innerText="Press Any Key to Start";
h1.style.color="black";
gameStarted=false;
level=0;
document.getElementById("level").innerText=level;

gamesequence=[];
usersequence=[];

}

document.addEventListener("keydown",function(event){

    let key=event.key;
    // arr.push(key);
    // console.log(arr);
    console.log(key + " is pressed");
    gameStarted=true;
    h1.innerText="Game Started";
   level++
   document.getElementById("level").innerText=level;


   let random=Math.floor(Math.random()*4)+1;
     let randomBox=document.querySelector("#box"+random);
    // randomBox.classList.add("active");
    // setTimeout(function(){
    //     randomBox.classList.remove("active");
    // },300)

    flash(randomBox);
gamesequence.push(randomBox.getAttribute("id"));

})

let box=document.querySelectorAll(".box");

box.forEach(function(box){
    box.addEventListener("click",function(){
        let currentBox=this;
        let currentBoxId=currentBox.getAttribute("id");
            usersequence.push(currentBoxId);
            console.log(usersequence);
            let currentidx=usersequence.length-1;

            if(currentidx>=0 && usersequence[currentidx]!==gamesequence[currentidx]){
                 console.log("Game Over");
                // h1.innerText.style.color="red";
                h1.innerText="Game Over";
                h1.style.color="red";

                // let gameoverAudio=new Audio("fahh.mp3");
                // gameoverAudio.play();
            
                gameoverAudio.currentTime = 0;
                gameoverAudio.play();

//                 document.addEventListener("click",function(){
//    let a = new Audio("fahh.mp3");
//    a.play();
// })
               
            }else if(usersequence.length===gamesequence.length){
                level++
                document.getElementById("level").innerText=level;
usersequence=[]; // Clear user sequence for the next level.
                let random=Math.floor(Math.random()*4)+1;
    let randomBox=document.querySelector("#box"+random);
    gamesequence.push(randomBox.getAttribute("id"));
    // randomBox.classList.add("active");
    // setTimeout(function(){
    //     randomBox.classList.remove("active");
    // },300)


    flash(randomBox);


            }else{
                // console.log("Correct");Do nothing.

// Wait for next user click.
                console.log(currentBoxId + " is clicked");
            }
         
        console.log(currentBoxId + " is clicked");
        
        // this.classList.add("active");
        // setTimeout(function(){  
        //  currentBox.classList.remove("active");
        // },300)
        flash(currentBox);




    })
})



 let button=document.querySelector(".restart-btn");
                button.addEventListener("click",function(){
                    restart();
                }
            )







// let box1=document.querySelector("#box1");
// let box2=document.querySelector("#box2");
// let box3=document.querySelector("#box3");
// let box4=document.querySelector("#box4");


// box1.addEventListener("click",function(){
//     console.log("Box 1 is clicked");
//     this.classList.add("active");
//     setTimeout(function(){
//         box1.classList.remove("active");
//     },300)
// })
// box2.addEventListener("click",function(){
//     console.log("Box 2 is clicked");
//     this.classList.add("active");
//     setTimeout(function(){
//         box2.classList.remove("active");
//     },300)
// })
// box3.addEventListener("click",function(){
//     console.log("Box 3 is clicked");
//     this.classList.add("active");
//     setTimeout(function(){
//         box3.classList.remove("active");
//     },300)
// })
// box4.addEventListener("click",function(){
//     console.log("Box 4 is clicked");
//     this.classList.add("active");
//     setTimeout(function(){
//         box4.classList.remove("active");
//     },300)
// })


