let number = Math.floor(Math.random() * 100);
console.log(number)
function Select() {
  const mynum = mynumber.value;
 
  const span = document.querySelector("span");
  console.log(number);
  console.log(mynum);

  if(number == mynum){
    span.innerHTML = "You are win"
  }
  else{
    span.innerHTML = "You are not win"
  }
}
