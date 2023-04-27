const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", addItem);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  const newItem = document.createElement("li");
  const text = document.createTextNode(input.value);
  newItem.appendChild(text);
  list.appendChild(newItem);
  input.value = "";
}
