

// Calculate Total Expenses & Remaining
const allCalculationButton = document.getElementById('all-calculation');
allCalculationButton.addEventListener('click', allCalculation);

  function allCalculation(){



  // My Budget................
  const myBudgetInput = document.getElementById('my-budget-input');
  const myBudgetAmount = parseInt(myBudgetInput.value);
  
  // My Expenses...............
  // Processor
  const processorInput = document.getElementById('processor-input');
  const processorAmount = parseInt(processorInput.value);

  // RAM / ROM
  const ramRomInput = document.getElementById('ram-rom-input');
  const ramRomAmount = parseInt(ramRomInput.value);

  // HARD DISK
  const hardDiskInput = document.getElementById('hard-disk-input');
  const hardDiskAmount = parseInt(hardDiskInput.value);

    const totalExpensesAmount = processorAmount + ramRomAmount + hardDiskAmount;

    const remainingBalanceAmount = myBudgetAmount - totalExpensesAmount;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpensesAmount;


    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = remainingBalanceAmount;

    myBudgetInput.value = '';
    processorInput.value = '';
    ramRomInput.value = '';
    hardDiskInput.value = '';
}


// Savings Calculation
const savingButton = document.getElementById('saving-button');
savingButton.addEventListener('click', );
