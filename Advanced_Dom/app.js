// Advanced Topics for todo application

// Get data from user
// create a li element
// put the data in li element using innerHTML or textContent
// put the li into the ul



function Get() {
    // Get the data from user
  console.log(input.value);
  
  // Create a li element

  const myli = document.createElement("li");
  console.log(myli.textContent);

  // Put the data in li element using textContent

  myli.textContent = input.value;
  console.log(myli.textContent);

  // Put the data into ul
  // append
  // prepend

  data.append(myli);



}
