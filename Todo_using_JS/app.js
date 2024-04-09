function Get() {
  const user_value = input.value;
  const li = document.createElement("li");
  li.innerHTML = `${user_value} <button onclick=Delete(event)>Delete</button>`;
  data.append(li);
  console.log(li.textContent);
}

function Delete(event) {
  event.target.parentElement.remove();
}
