let todoList = JSON.parse(localStorage.getItem("todo")) || [];

//VARIABLE
const inputAdd = document.querySelector("#input"),
  btnAdd = document.querySelector("#add-task");
console.log(todoList);
//FUNCTIONS
const addInput = () => {
  const taskValue = inputAdd.value.trim();
  if (taskValue.length > 0) {
    const newTask = {
      task: taskValue,
      checked: false,
    };

    todoList.push(newTask);
    localStorage.setItem("todo", JSON.stringify(todoList));
    //CLEAR VALUE INPUT
    inputAdd.value = "";
    //CREATE ITEM ELEMENT
    creatItemElement();
  }
};

//CREAT ITEM ELEMENT IN DOM
const creatItemElement = () => {
  const listContainer = document.querySelector("#list");
  todoList.forEach((element) => {
    const item = document.createElement("li");
    item.className = "item";
    item.innerHTML = `
        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
        <p class="text">${element.task}</p>
        <i class="fa fa-trash-o de" job="delete" id="0"></i> 
        `;
    listContainer.append(item);
  });
};

btnAdd.addEventListener("click", addInput);
