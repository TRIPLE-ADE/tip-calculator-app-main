'use strict';

const tipBtn = document.querySelectorAll('.tip-btn');
const custom = document.getElementById('custom')
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const tipAmount = document.querySelector('.tip-value');
const total = document.querySelector('.total-value');
const resetBtn = document.querySelector('.reset');

tipBtn.forEach(e => {
    e.addEventListener('click', function () {
        if (people.value && bill.value) {
            let tip = Number(e.textContent.replace("%",''));
            const billInput = parseInt(bill.value);
            const peopleInput = parseInt(people.value);
            const billTipPercent = billInput * tip/100;
            const totalAmount = billTipPercent + billInput;
            const tipPerPerson = billTipPercent/peopleInput;
            const totalPerPerson = (totalAmount/peopleInput).toFixed(2);
            resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
            resetBtn.style.opacity = 1;

            total.textContent = `$${totalPerPerson}`;
            tipAmount.textContent = `$${tipPerPerson}`;
           
        }else{
            if(bill.value == '' ){
                bill.style.borderColor = 'red';
            }
            else if(people.value == ''){
                people.style.borderColor = 'red' 
            }
            
            setTimeout(() => {
                people.style.borderColor = 'hsl(172, 67%, 45%)';
                bill.style.borderColor = 'hsl(172, 67%, 45%)';
            }, 2000);
        }
    })
   
})     

custom.addEventListener('keyup', function (e) {
    if (people.value && bill.value) {
        
        let tip = Number(custom.value);
        const billInput = parseInt(bill.value);
        const peopleInput = parseInt(people.value);
        const billTipPercent = billInput * tip/100;
        const totalAmount = billTipPercent + billInput;
        const tipPerPerson = billTipPercent/peopleInput;
        const totalPerPerson = (totalAmount/peopleInput).toFixed(2);
        resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
        resetBtn.style.opacity = 1;

        total.textContent = `$${totalPerPerson}`;
        tipAmount.textContent = `$${tipPerPerson}`;
       
    } else{
        if(people.value == ''){
            people.style.borderColor = 'red' 
        } else if(bill.value == '' ){
            bill.style.borderColor = 'red';
        }
        
        setTimeout(() => {
            people.style.borderColor = 'hsl(172, 67%, 45%)';
            bill.style.borderColor = 'hsl(172, 67%, 45%)';
        }, 2000);
    }
   
})

resetBtn.addEventListener('click', function () {
    total.textContent = '$0.00';
    tipAmount.textContent = '$0.00';
    people.value = ''
    bill.value = ''
    custom.value = ''
})