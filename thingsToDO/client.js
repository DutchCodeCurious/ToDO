const url = "http://localhost:3000/";
const head = {
  headers: {
    "Content-Type": "application/json",
  },
};

//Gets data from database
async function getData() {
  const response = await fetch(url, head);
  const data = await response.json();
  return data;
}

//Gets description & id from database, gives info to AddToDom
async function splitData() {
  let data = await getData();
  data.forEach((element) => {
    addToDoToDOM(element.description, element._id);
  });
}

splitData();

//Delete data from database by Id
async function deleteToDo(id) {
  fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
}
