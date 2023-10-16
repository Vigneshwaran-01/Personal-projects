
//getting value for hex color generator

const outputColor=document.querySelector(".output-color");
const outputText=document.getElementById("output");
const modalButton=document.querySelector(".gen-btn");
const closeButton =document.querySelector(".close-btn");
//getting value for modal and button

const modal =document.querySelector(".modal");
const button=document.querySelector(".btn");

/*  when user clicks the button,open the modal*/ 
button.onclick=()=>{
    modal.style.display="block";
   
}
/*  when user clicks the close button,close the modal*/ 
closeButton.onclick=()=>{
    modal.style.display="none";
 
}

window.onclick=(event)=>{
    if(event.target == modal ){
        modal.style.display="none";
    }
} 

// function for generate random hex value
function generateColor(){
    const letters="0123456789ABCDF";
    let color='#';
    
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*letters.length)];
    
    }  
    outputColor.style.backgroundColor=color;
    outputText.innerHTML=color;
  
    }




modalButton.addEventListener("click",generateColor);



