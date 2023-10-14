const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const reset=document.getElementById("reset");
const counter=document.getElementById("counter")
let initvalue=0;

minus.addEventListener("click",()=>{
  initvalue--;
  counter.innerHTML=initvalue;


});
plus.addEventListener("click",()=>{
    initvalue++;
    counter.innerHTML=initvalue;
   
  
  });

  reset.addEventListener("click",()=>{
  initvalue=0;
    counter.innerHTML=initvalue;
   
  
  });