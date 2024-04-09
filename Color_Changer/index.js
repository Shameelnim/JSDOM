// CHange Background BLue into Red WHen the button pressed

const box = document.querySelector(".box");
const button = document.querySelector("button");


// add event listener is higher order function
button.addEventListener("click",()=>{
    // alert("THe button pressed");

    box.style.backgroundColor = 'red'
})


