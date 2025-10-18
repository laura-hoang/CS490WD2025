const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const counter = document.getElementById("counter");

function updateCounter(){
  const items = document.querySelectorAll("li");
  const n = items.length;
  counter.textContent = `${n} ${n === 1 ? "item" : "items"}`;
}

function createItem(text){
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () =>{
    li.classList.toggle("done");
  });
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.setAttribute("aria-label", `Delete ${text}`);

  deleteBtn.addEventListener("click", (e) =>{
    e.stopPropagation();
    li.remove();
    updateCounter();
  });
  
  li.appendChild(deleteBtn);
  return li;
}

addBtn.addEventListener("click", () =>{
  const text = input.value.trim();
  if (!text) return;
  const li = createItem(text);
  list.appendChild(li);
  input.value = "";
  updateCounter();
});

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") addBtn.click();
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCounter();
});

updateCounter();