//-------------------- Java Script --------------------//
let display = document.querySelector(".display");
let input = document.querySelectorAll(".input");

input.forEach((inputs) =>{
    inputs.addEventListener("click", ()=>{
        display.value += inputs.value;
    });
});

let clear = document.querySelector(".clear");

clear.addEventListener("click", ()=> {
    display.value = "";
});

let deletes = document.querySelector(".delete");
deletes.addEventListener("click", ()=>{
    display.value = display.value.toString().slice(0, -1)
})


let equal = document.querySelector(".equal");
equal.addEventListener("click", ()=>{
    display.value = eval(display.value);
})