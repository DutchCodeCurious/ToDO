//Adds todo task to list
async function addToDoToDOM(text, id) {
  var todolist = document.getElementById("list");
  var newLi = document.createElement("li");
  var bin = document.createElement("img");
  bin.src = "bin.png";
  bin.id = id;
  bin.className = "bin";
  var text = document.createTextNode(text);
  todolist.appendChild(newLi);
  newLi.appendChild(text);
  newLi.appendChild(bin);
}

//POST input to the database
async function handleOnInputEvent() {
  var toDo = document.getElementById("input").value;
  if (toDo.length === 0) {
    alert("Need a task to add!");
  } else {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({ description: toDo, done: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

//Gets id of bin button
async function handleOnDeleteEvent() {
  const list = document.getElementById("list");
  list.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "IMG") {
      deleteToDo(e.target.id);
    }
  });
}

handleOnDeleteEvent();
