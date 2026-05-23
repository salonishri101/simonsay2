// let arr=["Task 1","Task 2","Task 3"];

// //add task

// let task=prompt("Enter a task: ");

// while(true){
    
// if(task=="add"){

//     let work =prompt("Enter a task to add: ");
//     work =work.toLowerCase();
//     arr.push(work);
//     console.log("Task added successfully");
// }else if(task=="remove"){

// if (arr.length == 0) {
//     console.log("No tasks to remove");
//     break;
// }


//     let val =prompt("Enter a task to remove: ");
//     if(arr.includes(val)){
//         let index = arr.indexOf(val)

//         if (index === -1) {
//             console.log("Task not found");
//         } else {
//             arr.splice(index,1);
//             console.log("Task removed successfully");
//         }
// }

// }else if(task=="display"){

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]+" is at index "+i);
//     }
// }else if(task=="exit"){
//     console.log("Exiting the program");
// }else
// {
//     console.log("Invalid request");
// }


// task= prompt("Enter a task");

// }
// plus=document.getElementById("plus");
// minus=document.getElementById("minus");

// plus.addEventListener("click",function(){

// let p=document.querySelector("p");
// let val= parseInt(p.textContent);
// p.innerText=val+1


// }
// )


// minus.addEventListener("click",function(){

// let p=document.querySelector("p");
// let val= parseInt(p.textContent);
// p.innerText=val-1


// }
// )


// bulb=document.querySelector(".bulb");
// bulb.addEventListener("click",function(){
//     bulb.classList.toggle("active");
   
// }


// )

let container=document.querySelector(".container");

  
container.addEventListener("dblclick",function(){
   

  container.classList.toggle("active");

}


)

