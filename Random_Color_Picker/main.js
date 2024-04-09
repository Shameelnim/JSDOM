// Create Color picker using javascript
function Pick(){
const container = document.querySelector(".container");
// List of colors
const colors = [
    'red',
    'green',
    '#fff',
    'rgb(30,20,0.2)'
]
console.log(colors);

// Random Number
const number = Math.floor(Math.random()*colors.length);
console.log(number)

// Output
const output = colors[number]
console.log(output);

// Change the color

container.style.backgroundColor = output;
}