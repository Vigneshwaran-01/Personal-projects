 const inputText= document.querySelector(".input-text");
 const button=document.querySelector("#btn");
 const outputText =document.querySelector(".output");

 button.addEventListener("click",()=>{
 checkPalindrome(inputText.value.toLowerCase());

 });
 
 function checkPalindrome(txt){
   var txt_new=txt.split('').reverse().join('');
   if(txt==txt_new){
      outputText.innerHTML="yes! it's a palindrome";
   }
   else{
    outputText.innerHTML="nope! not a palindrome";
   }
 }
 



