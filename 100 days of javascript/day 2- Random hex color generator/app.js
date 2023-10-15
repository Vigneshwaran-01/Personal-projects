const outputColor=document.querySelector(".output-color");
const outputText=document.getElementById("output");
const button=document.querySelector(".gen-btn");

function generateColor(){
    const letters="0123456789ABCDF";
    let color='#';
    
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*letters.length)];
    
    }  
    outputColor.style.backgroundColor=color;
    outputText.innerHTML=color;
  
    
  
    
    }




button.addEventListener("click",generateColor);








