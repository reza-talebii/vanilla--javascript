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

// load list and show in DOM
const loadList = () => {
  showDOMlist("expense", expensesContainer);
  showDOMlist("income", incomeContainer);
  showDOMlist();
  amountTotal("expense");
  amountTotal("income");
  calculateBalance();
};

//creat item and show in dom
const showDOMlist = (type = "all", container = allContainer) => {
  const listAll = container.querySelector(".list");
  let list = expenseIncomeList;
  // CHECK TYPE AND FILTER
  if (type == "expense") {
    list = expenseIncomeList.filter((item) => item.type == "expense");
  }
  if (type == "income") {
    list = expenseIncomeList.filter((item) => item.type == "income");
  }

  //clear container
  listAll.innerHTML = "";

  list.forEach((element, index) => {
    //creat item
    const item = document.createElement("li");
    // add class
    item.className = element.type;
    item.innerHTML = `
    <div class="entry">${element.title}: $${element.amount}</div>
    <div id="edit"></div>
      <div id="delete" data-id="${index}"></div>
    `;
    //append item
    listAll.append(item);
  });
};

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
  const inputAmount = document.querySelector(`#expense-amount-input`);
  const inputTitle = document.querySelector(`#expense-title-input`);
  const amountValue = inputAmount.value;
  const titleValue = inputTitle.value;

  //check empty input
  if (amountValue == "" && titleValue == "") return;
  else {
    const newList = {
      type: "expense",
      title: titleValue,
      amount: amountValue,
    };

    saveDate(newList);

    //clear inputs value
    inputAmount.value = "";
    inputTitle.value = "";
  }
  //show in dom
  loadList();
  //add total amount
  amountTotal("expense");
  //calculate Balance
  calculateBalance();
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
  //show in dom
  loadList();
  //add total amount
  amountTotal("income");
  //calculate Balance
  calculateBalance();
};

//show total expense and income
const amountTotal = (type) => {
  const amountBox = document.querySelector(`.${type}-total`);
  const typeList = expenseIncomeList.filter((item) => item.type == type);

  const sumAmount = typeList.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  amountBox.innerHTML = `<small>$</small>${sumAmount}`;
};

const calculateBalance = () => {
  const balanceContainer = document.querySelector(".value");
  const getExpenseAmount = expenseIncomeList.filter(
    (item) => item.type == "expense"
  );
  const getIncomeAmount = expenseIncomeList.filter(
    (item) => item.type == "income"
  );

  const sumIncomeOutCome = () => {
    const income = getIncomeAmount.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );
    const outcome = getExpenseAmount.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );
    return [income, outcome];
  };
  const [sumIncome, sumOutcome] = sumIncomeOutCome();
  updateChart(sumIncome, sumOutcome);

  const calcBalance = sumIncome - sumOutcome;
  //color balance
  if (calcBalance < 0) {
    balanceContainer.classList.add("red");
  } else {
    balanceContainer.classList.remove("red");
  }

  balanceContainer.innerHTML = `$${calcBalance}`;
};

window.addEventListener("load", loadList);
tab_bar.addEventListener("click", (e) => selectTab_bar(e));
btnExpense.addEventListener("click", addExpense);
btnIncome.addEventListener("click", addIncome);
