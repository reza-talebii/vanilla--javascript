const expenseIncomeList =
  JSON.parse(localStorage.getItem("ExpenseIncome")) || [];

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

//push in list and save in localStorage
const saveDate = (newList) => {
  expenseIncomeList.push(newList);
  localStorage.setItem("ExpenseIncome", JSON.stringify(expenseIncomeList));
};

const addExpense = () => {
  const inputAmount = document.querySelector(`#income-amount-input`);
  const inputTitle = document.querySelector(`#income-title-input`);
  const amountValue = inputAmount.value;
  const titleValue = inputTitle.value;
  //check empty input
  if (amountValue == "" && titleValue == "") return;
  else {
    const newList = {
      type: "expense",
      title: inputTitle,
      amount: titleValue,
    };

    saveDate(newList);

    //clear inputs value
    inputAmount.value = "";
    inputTitle.value = "";
  }
};

const addIncome = () => {
  const inputAmount = document.querySelector(`#income-amount-input`);
  const inputTitle = document.querySelector(`#income-title-input`);
  const amountValue = inputAmount.value;
  const titleValue = inputTitle.value;
  //check empty input
  if (amountValue == "" && titleValue == "") return;
  else {
    const newList = {
      type: "income",
      title: titleValue,
      amount: amountValue,
    };
    saveDate(newList);
    //clear inputs value
    inputAmount.value = "";
    inputTitle.value = "";
  }
};

tab_bar.addEventListener("click", (e) => selectTab_bar(e));
btnExpense.addEventListener("click", addExpense);
btnIncome.addEventListener("click", addIncome);
