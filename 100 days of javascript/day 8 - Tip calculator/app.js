
const bill=document.querySelector(".inp-text");

const tipBtns=document.querySelectorAll(".tip");
const tipCustom=document.getElementById("inp-tip");
const people =document.getElementById('inp-people');
const errorMsg =document.querySelector('.error-msg');
const result =document.querySelectorAll('.value');
const resetBtn =document.querySelector('.reset');

bill.addEventListener('input',setBillValue);
tipBtns.forEach(btn=>{
    btn.addEventListener('click',handleClick);
});
tipCustom.addEventListener('input',setTipCustomValue);
people.addEventListener('input',setPeopleValue);
resetBtn.addEventListener('click',reset);


 let billValue=0.0; //default value
 let tipValue=0.15; //default value
 let peopleValue=1; //default value




function setBillValue(){

billValue=parseFloat(bill.value);
calculateTip();

}

function handleClick(event){
    tipBtns.forEach(btn=>{
        //clear the active state of the buton
        btn.classList.remove('btn-active');

        //set active state to the buuton
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue=parseFloat(btn.innerHTML)/100;
        }
        
    });
    console.log(tipValue);
    calculateTip();
}

function setTipCustomValue(){
    tipValue=parseFloat(tipCustom.value/100);
    console.log(tipValue);

    //remove active state while click on custom input field
    tipBtns.forEach(btn =>{
        btn.classList.remove('btn-active');
    }) ;
    calculateTip();
}

function setPeopleValue(){
    peopleValue=parseFloat(people.value);

    if(peopleValue <=0){
        errorMsg.classList.add('show-error-msg');
        setTimeout(function(){
            errorMsg.classList.remove('show-error-msg');
        },3000);

    }
    calculateTip();
}

function calculateTip(){
    if (peopleValue >=1){
        let tipAmount = billValue *tipValue/peopleValue;
        let total = billValue*(tipValue+1)/peopleValue;
        result[0].innerHTML='$'+ tipAmount.toFixed(2);
        result[1].innerHTML='$'+total.toFixed(2);
    }
}

function reset(){
    bill.value='0.0';
    setBillValue();

    tipBtns[2].click();

    people.value='1';
    setPeopleValue();
}