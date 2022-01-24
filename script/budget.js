const tab_bar = document.querySelector(".toggle");
//list container variable
const incomeContainer = document.querySelector("#income");
const expensesContainer = document.querySelector("#expense");
const allContainer = document.querySelector("#all");
// form element variable
const btnExpense = document.querySelector(".add-expense");
const btnIncome = document.querySelector(".add-income");

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

const addExpense = (e) => {
  console.log(e);
};

const checkInputValid = (type) => {
  const inputAmount = document.querySelector(`#${type}-amount-input`).value;
  const inputTitle = document.querySelector(`#${type}-title-input`).value;
  //check empty input
  return inputAmount == "" && inputTitle == "" ? false : true;
};

const addIncome = () => {
  if (checkInputValid("income")) {
    
  } else {
    return false;
  }
};

tab_bar.addEventListener("click", (e) => selectTab_bar(e));
btnExpense.addEventListener("click", addExpense);
btnIncome.addEventListener("click", addIncome);
