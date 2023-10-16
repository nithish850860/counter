const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const reset = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

inc.addEventListener("click",()=>{
    count+=1;
    counter.innerHTML = count ;
})
dec.addEventListener("click",()=>{
    count-=1;
    counter.innerHTML = count ;
})
reset.addEventListener("click",()=>{
    count = 0;
    counter.innerHTML = count ;
})