
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



  // Error Handle

    if ( myBudgetAmount<0 || processorAmount<0 || ramRomAmount<0 || hardDiskAmount<0 ) {
      alert('Error... Negative Number is Not Allow. Please Enter Positive Number ');
    }

    // else if ((typeof(myBudgetAmount == 'string')) || (typeof(processorAmount == 'string')) || (typeof(ramRomAmount == 'string')) || (typeof(hardDiskAmount == 'string')) ){
    //   alert('Error... String is Not Allow. Please Inter Number ');
    // }
else{
    const totalExpensesAmount = processorAmount + ramRomAmount + hardDiskAmount;

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
  const myBudgetInput = document.getElementById('my-budget-input');
  const myBudgetAmount = parseInt(myBudgetInput.value);
  
  // Saving Balance Input.......
  const savingInput = document.getElementById('saving-input');
  const savingAmount = parseInt(savingInput.value);

  const totalSave = ( myBudgetAmount * savingAmount ) / 100 ;
  
  const savingBalanceAmount = document.getElementById('saving-amount');
  savingBalanceAmount.innerText = totalSave;


  // Final Balance......
  const balance = document.getElementById('remaining-amount');
  const finalBalance = parseInt(balance.innerText) - totalSave;

  const finalBalanceAmount = document.getElementById('final-balance');
  finalBalanceAmount.innerText = finalBalance;

      // savingInput.value = '';

}
