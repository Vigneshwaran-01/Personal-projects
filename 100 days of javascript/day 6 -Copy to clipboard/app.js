const button =document.querySelector(".btn");
const text =document.querySelector(".tooltip-text");
button.addEventListener("click",()=>{
    var copyText =document.getElementById("input");

    copyText.select();
    copyText.setSelectionRange(0,99);
    navigator.clipboard.writeText(copyText.value);
    text.innerHTML="copied";
});
text.innerHTML="copy to clipboard";



