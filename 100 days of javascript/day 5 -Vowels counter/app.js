const inputText =document.querySelector(".input");
const counter=document.querySelector(".output-count");
const button =document.getElementById("check-btn");



button.addEventListener("click",()=>{
    if(inputText.value==""){
        alert("please enter the text");
    }
    else{
        let values =inputText.value;
        countVowels(values);
       
        
    }
});
function countVowels(str){
      const Vowels=['a','e','i','o','u','A','E','I','O','U'];
      let count=0;
      for(let char of str){
        if(Vowels.includes(char)){
            
            count++;
        }
      
      }
      counter.innerHTML=count;

     
}