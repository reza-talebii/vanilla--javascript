const tab_bar = document.querySelector(".toggle");
const incomeContainer = document.querySelector("#income");
const expensesContainer = document.querySelector("#expense");
const allContainer = document.querySelector("#all");

//show select container list
const showContainer = (type) => {
  incomeContainer.classList.add("hide");
  expensesContainer.classList.add("hide");
  allContainer.classList.add("hide");
  type.classList.remove("hide");
};

//add active class to selected tab bar
const activeTab_bar = (tabClicked) => {
  [...tab_bar.children].forEach((tab) => tab.classList.remove("active"));
  tabClicked.classList.add("active");
};

const selectTab_bar = (e) => {
  const tabClicked = e.target.innerText.toLowerCase();
  const selectContent = document.querySelector(`#${tabClicked}`);

  activeTab_bar(e.target);
  showContainer(selectContent);
};

tab_bar.addEventListener("click", (e) => selectTab_bar(e));
