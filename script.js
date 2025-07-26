let number=document.getElementById("number");
let increase=document.getElementById("increase-btn");
let decrease=document.getElementById("decrease-btn");
let reset=document.getElementById("reset-btn");
let i=0;
increase.addEventListener("click",function(){
    i++;
    number.textContent=i;
    // console.log("hello");
})
decrease.addEventListener("click",function(){
    if(i>0){
        i--;
        number.textContent=i;
        // console.log("hello priyanshi");
    }
})
reset.addEventListener("click",function(){
    i=0;
    number.textContent=0;
    // console.log("hello world");
})