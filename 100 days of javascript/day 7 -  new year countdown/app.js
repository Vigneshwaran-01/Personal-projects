const  countDown=()=>{
   const currentYear=new Date().getFullYear();
   const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);
   const currentDate=new Date();
   const diff=newYear-currentDate;
   const d=Math.floor(diff/1000/60/60/24);
   const h=Math.floor((diff/1000/60/60)%24);
   const m=Math.floor((diff/1000/60)%60);
   const s=Math.floor((diff/1000)%60);      
  

    
    document.querySelector(".day").innerHTML=d<10?"0"+d:d;
    document.querySelector(".h").innerHTML=h<10?"0"+h:h;
    document.querySelector(".m").innerHTML=m<10?"0"+m:m;
    document.querySelector(".s").innerHTML=s<10?"0"+s:s;
};

setInterval(countDown,1000);
