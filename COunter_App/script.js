// Create a counter app using js. which can add number,decrease number,reset number.

let label = document.querySelector("label");
let count = 0;
function Count(){
    count += 1;
    console.log(count);
    label.innerHTML = count
}

function Decrease(){
    count -= 1;
    label.innerHTML = count
}


function Reset(){
    count = 0;
    label.innerHTML = count;
}