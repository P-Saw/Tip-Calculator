const billInput = document.querySelector('#bill');

const radioBtns = document.querySelectorAll('input[type="radio"]');

const customTipPercentage = document.querySelector('#custom');

const numberOfPeople = document.querySelector('#people');

const tipResult = document.querySelector('.tip-amount .result');
const billResult = document.querySelector('.total-person .result');

// TIP AND BILL
const tipPercentage = () => {
	let tip = 0;
	if (!customTipPercentage.value) {
		radioBtns.forEach((btn) => {
			if (btn.checked) {
				tip = btn.value;
			}
            else{
                tip = tip;
            }
		});
	} else {
		tip = customTipPercentage.value;
	}
	return parseInt(tip);
};

const tipPerPerson = (tip, bill, person) =>{
    return (tip * bill/100)/person;
};

const tipAmountPerPerson = () =>{
    return tipPerPerson(tipPercentage(), billInput.value, numberOfPeople.value);
};

const billPerPerson = (bill, persons) =>{
    return bill/persons;
};

const billAmountPerPerson = () =>{
    return billPerPerson(billInput.value, numberOfPeople.value);
}

const updateValues = () =>{
    if(!isNaN(tipAmountPerPerson()) && isFinite(tipAmountPerPerson())){
        tipResult.innerHTML = `$${tipAmountPerPerson().toFixed(2)}`;
    } else {
        tipResult.innerHTML = `$0.00`;
    }
    if(!isNaN(billAmountPerPerson()) && isFinite(billAmountPerPerson())){
        billResult.innerHTML = `$${billAmountPerPerson().toFixed(2)}`;
    } else {
        billResult.innerHTML = `$0.00`;
    }
}

// UNCHECKING BUTTON WHEN CUSTOM IS CLICKED

customTipPercentage.addEventListener('click', () =>{
    radioBtns.forEach(input =>{
        input.checked = false;
    });
});

// RESET BUTTON
const reset = () =>{
    billInput.value = '';
    radioBtns.forEach(input =>{
        input.checked = false;
    });
    numberOfPeople.value = '';
    billResult.innerHTML = `$0.00`;
    tipResult.innerHTML = `$0.00`;
    customTipPercentage.value = '';
}
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);

// ADDING UPDATE FUNCTION TO INPUTS
radioBtns.forEach(btn =>{
    btn.addEventListener('click', updateValues);
});
billInput.addEventListener('input', updateValues);
numberOfPeople.addEventListener('input', updateValues);
customTipPercentage.addEventListener('input', updateValues);