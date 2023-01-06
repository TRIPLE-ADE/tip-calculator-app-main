'use strict';

// selecting all the DOM element
const tipBtn = document.querySelectorAll('.tip-btn');
const custom = document.getElementById('custom')
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const tipAmount = document.querySelector('.tip-value');
const total = document.querySelector('.total-value');
const resetBtn = document.querySelector('.reset');

//function that calculate tip and total and display it
function calculateAmount(billInput, peopleInput, tip) {
    const billTipPercent = billInput * tip/100;
    const totalAmount = billTipPercent + billInput;
    const tipPerPerson = (billTipPercent/peopleInput).toFixed(2);
    const totalPerPerson = (totalAmount/peopleInput).toFixed(2);
    
    //display total and tip amount as textContent 
    total.textContent = `$${totalPerPerson}`;
    tipAmount.textContent = `$${tipPerPerson}`;
}

//selecting all the tip Button
tipBtn.forEach(e => {
    e.addEventListener('click', function () {
        if (people.value && bill.value) {
            let tip = Number(e.textContent.replace("%",''));
            const billInput = parseInt(bill.value);
            const peopleInput = parseInt(people.value);

            //function calculate the amount and display
            calculateAmount(billInput, peopleInput, tip);

            //reset button background color and opacity
            resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
            resetBtn.style.opacity = 1;

           
        }else{
            if(bill.value == '' ){
                bill.style.borderColor = 'red';
            }
            else if(people.value == ''){
                people.style.borderColor = 'red' 
            }
            
            //setTimeOut of 2 seconds
            setTimeout(() => {
                people.style.borderColor = 'hsl(172, 67%, 45%)';
                bill.style.borderColor = 'hsl(172, 67%, 45%)';
            }, 2000);
        }
    })
   
})     

//adding event listener to custom tip 
custom.addEventListener('keyup', function (e) {
    if (people.value && bill.value) {
        
        let tip = Number(custom.value);
        const billInput = parseInt(bill.value);
        const peopleInput = parseInt(people.value);

        //function calculate the amount and display
        calculateAmount(billInput, peopleInput, tip);
        resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
        resetBtn.style.opacity = 1;
       
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

//reset button event listener and function to perform 
resetBtn.addEventListener('click', function () {
    total.textContent = '$0.00';
    tipAmount.textContent = '$0.00';
    people.value = ''
    bill.value = ''
    custom.value = ''
})