let todoList = JSON.parse(localStorage.getItem("todo")) || [];

//******VARIABLE*******
const inputAdd = document.querySelector("#input"),
  btnAdd = document.querySelector("#add-task");

//*****FUNCTIONS******
const addInput = () => {
  const taskValue = inputAdd.value.trim();
  if (taskValue.length > 0) {
    const newTask = {
      task: taskValue,
      checked: false,
      id: Math.trunc(Math.random() * 1000),
    };

    todoList.push(newTask);
    localStorage.setItem("todo", JSON.stringify(todoList));
    //CLEAR VALUE INPUT
    inputAdd.value = "";
    //CREATE ITEM ELEMENT
    creatItemElement();
  }
};

//creat item element
const creatItemElement = () => {
  const listContainer = document.querySelector("#list");
  //clear list
  listContainer.innerHTML = "";
  todoList.forEach((element, index) => {
    const item = document.createElement("li");
    item.className = "item";
    item.innerHTML = `
        <i class="fa fa-circle-thin co complete" job="complete" id="0"></i>
        <p class="text">${element.task}</p>
        <i class="fa fa-trash-o de delete" job="delete" id="0"></i> 
        `;
    listContainer.append(item);

    //DELETE ITEM
  });
};

btnAdd.addEventListener("click", addInput);
creatItemElement();
