function inputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function currentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceCurrent = parseFloat(balanceTotalText);
    return balanceCurrent;
}

function inputToUpdate(inputFieldId, totalAmountId, inputValue){
    if(inputValue > 0){
        const totalAmount = document.getElementById(totalAmountId);
        const updateTotal = inputValue + parseFloat(totalAmount.innerText);
        totalAmount.innerText = updateTotal;
        document.getElementById(inputFieldId).value = '';
    }
}

function balanceUpdate(inputValue, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = currentBalance();
    if(isAdd == true){
        const updateBalance = balanceCurrent + inputValue;
        balanceTotal.innerText = updateBalance;
    }
    else{
        const updateBalance = balanceCurrent - inputValue;
        balanceTotal.innerText = updateBalance;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
    const inputValue = inputFieldValue('deposit-input');
    if(inputValue > 0){
        inputToUpdate('deposit-input', 'deposit-total', inputValue);
        balanceUpdate(inputValue, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputValue = inputFieldValue('withdraw-input');
   const balanceCurrent = currentBalance();
    if(inputValue > 0 && inputValue <= balanceCurrent){
        inputToUpdate('withdraw-input', 'withdraw-total', inputValue);
        balanceUpdate(inputValue, false);
    }
})