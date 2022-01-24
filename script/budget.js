const tab_bar = document.querySelector(".toggle");
const incomeContainer = document.querySelector("#income");
const expensesContainer = document.querySelector("#expense");
const allContainer = document.querySelector("#all");

const showContainer = (type) => {
  incomeContainer.classList.add("hide");
  expensesContainer.classList.add("hide");
  allContainer.classList.add("hide");
  type.classList.remove("hide");
};



tab_bar.addEventListener("click", (e) => {
  const tabClicked = e.target.innerText.toLowerCase();
  const selectContent = document.querySelector(`#${tabClicked}`);

  activeTab_bar(e.target);
  showContainer(selectContent);
});
