
let currentCounter=document.getElementById("counter")
let error=document.getElementById("error")
let decrement=document.getElementById("decrement")
let increment=document.getElementById("increment")
let clear=document.getElementById("clear")
let count=0;
increment.addEventListener("click",()=>{
       
       console.log(count);
       count++;
      
       currentCounter.innerHTML=`Your Current Counter is: ${count}`;
       error.style.display='none';
})

decrement.addEventListener("click",()=>{


    if(count >1){
        count--;
      
        currentCounter.innerHTML=`Your Current Counter is: ${count}`;
    }
    else{
        error.style.display='block';  
    error.innerHTML=` Error:you can not go below 0`;

    }
})

clear.addEventListener("click",()=>{
    count=0;
    currentCounter.innerHTML=`Your Current Counter is: ${count}`;
})
