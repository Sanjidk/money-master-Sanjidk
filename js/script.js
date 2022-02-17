
// Calculate Total Expenses & Remaining
const allCalculationButton = document.getElementById('all-calculation-button');
allCalculationButton.addEventListener('click', allCalculation);

  function allCalculation(){
  // My Budget................
  const myBudgetInput = document.getElementById('my-budget-input');
  const myBudgetString = myBudgetInput.value;
  const myBudgetAmount = parseFloat(myBudgetString);
  
  // My Expenses...............
  // Processor
  const processorInput = document.getElementById('processor-input');
  const processorString = processorInput.value;
  const processorAmount = parseFloat(processorString);

  // RAM / ROM
  const ramRomInput = document.getElementById('ram-rom-input');
  const ramRomString = ramRomInput.value;
  const ramRomAmount = parseFloat(ramRomString);

  // HARD DISK
  const hardDiskInput = document.getElementById('hard-disk-input');
  const hardDiskString = hardDiskInput.value;
  const hardDiskAmount = parseFloat(hardDiskString);


  // Calculation Expenses 
  const totalExpensesAmount = processorAmount + ramRomAmount + hardDiskAmount;

  // Error Handle for Negative Number ,, String,, Compare Budget...
    if ( myBudgetAmount<0 || processorAmount<0 || ramRomAmount<0 || hardDiskAmount<0 ) {
      alert('Error... Negative Number is Not Allow. Please Enter Positive Number ');
    }
    else if (isNaN(myBudgetAmount) || isNaN(processorAmount) || isNaN(ramRomAmount) || isNaN(hardDiskAmount)){
      alert('Error... Please Enter Positive Number ');
    }
    else if (myBudgetAmount< totalExpensesAmount) {
        alert('Error... Your Expenses is HIgher than Your Budget');
      }
    else
    {
    const remainingBalanceAmount = myBudgetAmount - totalExpensesAmount;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpensesAmount;

    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = remainingBalanceAmount;

    // myBudgetInput.value = '';
    // processorInput.value = '';
    // ramRomInput.value = '';
    // hardDiskInput.value = '';
}
}

// Savings Calculation
const savingButton = document.getElementById('saving-button');
savingButton.addEventListener('click', savingBalance );

function savingBalance(){
  
  // My Budget................
  const BudgetInput = document.getElementById('my-budget-input');
  const BudgetString = BudgetInput.value;
  const BudgetAmount = parseFloat(BudgetString);
  
  // Saving Balance Input.......
  const savingInput = document.getElementById('saving-input');
  const savingString = savingInput.value;
  const savingAmount = parseFloat(savingString);

  
  const totalSave = ( BudgetAmount * savingAmount ) / 100 ;

  const saveBalance = document.getElementById('remaining-amount').innerText;


  // Error Handle for Negative value,, String,, and Compare
  if (totalSave > saveBalance ) {
    alert('Input Error... You Do not have much Amount for Saving');
    
  }
  else if (savingAmount<0 || isNaN(savingAmount)) {
    alert('Input Error... Please Input Positive Number');

  }
  else{
  const savingBalanceAmount = document.getElementById('saving-amount');
  savingBalanceAmount.innerText = totalSave;

  // Final Balance......
  const balance = document.getElementById('remaining-amount');
  const balanceString = balance.innerText - totalSave
  const finalBalance = parseFloat(balanceString);

  const finalBalanceAmount = document.getElementById('final-balance');
  finalBalanceAmount.innerText = finalBalance;

      // savingInput.value = '';
}
}
