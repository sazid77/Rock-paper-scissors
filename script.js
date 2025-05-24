
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let user=0;
let comp=0;




rock.addEventListener("click",()=>{
  const userchoice = rock.getAttribute("id");
  playgame(userchoice);
  

})

paper.addEventListener("click",()=>{
    const userchoice = paper.getAttribute("id");
  playgame(userchoice);
   
})


scissor.addEventListener("click",()=>{
    const userchoice = scissor.getAttribute("id");
  playgame(userchoice);
    
})

  

let gencomputerchoice =()=>{
    let choice = ["rock","paper","scissor"];
   const randominx = parseInt(Math.random()*3);
return choice[randominx];
   
   


}


const draw =()=>{
   let msg= document.getElementById("msg");
   msg.innerHTML=" Game  draw ! Play again";
   msg.style.backgroundColor="#FFC107";
   
}


let youwin =(userchoice,compchoice)=>{
    let msg= document.getElementById("msg");
    msg.innerHTML=`you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    let userscore = document.getElementById("user");
    user = user +1;
    userscore.innerText=`${user}`;

}

let compwin=(userchoice,compchoice)=>{
    let msg= document.getElementById("msg");
    msg.innerHTML= `you lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    let compscore = document.getElementById("comp");
    comp = comp +1;
    compscore.innerText=`${comp}`;
}



 let playgame =(userchoice)=>{
   console.log(`the user choice ${userchoice}`)
   const compchoice = gencomputerchoice();
   console.log(`the comp choice ${compchoice}`)
  if (userchoice===compchoice) {
   draw();
  }
  else{
    if (userchoice==="rock") {
        if (compchoice==="scissor") {
            youwin(userchoice,compchoice);
        }else{
            
            compwin(userchoice,compchoice); 
        }
    }
    else if(userchoice==="paper") 
         {
           if (compchoice==="rock") {
           
            youwin(userchoice,compchoice); 
           }
           else{
        
            compwin(userchoice,compchoice);
           }


         }
     else{   ///scissor user
            if (compchoice==="paper") {
              
                youwin(userchoice,compchoice);  
            }
            else{
                
                compwin(userchoice,compchoice);
            }
         }

  }

}












