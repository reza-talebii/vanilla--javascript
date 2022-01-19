let todoList = JSON.parse(localStorage.getItem("todo")) || [];

//VARIABLE
const inputAdd = document.querySelector("#input"),
  btnAdd = document.querySelector("#add-task");

const addInput = () => {
  const taskValue = inputAdd.value.trim();
  if (taskValue.length > 0) {
    const newTask = {
      task: taskValue,
      checked: false,
    };

    todoList.push(newTask);
    localStorage.setItem("todo", JSON.stringify(newTask));
  }
};

btnAdd.addEventListener("click", addInput);
