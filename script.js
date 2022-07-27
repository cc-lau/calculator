//Button Variables
const input = document.querySelector('.screen')
const numButton = document.querySelectorAll('.num')
const opButton = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const decimalButton = document.querySelector('.decimal')
let currentNum = '';
let previousNum = '';
let operator = '';

//Display number on screen
numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.dataset.value);
    })
})

//Current number is equal to currentNum
function handleNumber(number) {
    if (currentNum.length <= 12) {
        currentNum += number;
        input.textContent = currentNum;
    }
}

//Reset calculator when clear button is pressed
clearButton.addEventListener('click', () => {
    resetCalculator();
});

//Function to reset calculator
function resetCalculator() {
    input.textContent = '';
    currentNum = '';
    previousNum = '';
}

//delete calculator when clear button is pressed
numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        deleteNumber(e.target.dataset.value);
    })
})

//fff
function deleteNumber() {
        currentNum.slice(0, str.length - 1);
        input.textContent = currentNum;
}

//Get operator button data value
opButton.forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.dataset.value)
    })
})

decimalButton.addEventListener('click', () => {
    addDecimal();
});

//Set value to previous num when operator is selected
function handleOperator(op) {
    if (previousNum === '') {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === '') {
        operatorCheck(op);
    } else {
        operate();
        operator = op;
    }
}

//Check operator, set currentNum to blank
function operatorCheck(text) {
    operator = text;
    currentNum = '';
}

//Compute numbers if equal button is pressed
equalButton.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") {
        operate();
    }
});

//Operate function to check operator and call correct function
function operate() {
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);
    switch (operator) {
        case "+":
            add(currentNum, previousNum);
            break;
        case "-":
            subtract(currentNum, previousNum);
            break;
        case "*":
            multiply(currentNum, previousNum);
            break;
        case "/":
            if(currentNum === 0) {
                input.textContent = "ERROR"
            } else {
            divide(currentNum, previousNum);
        }
            break;
    }
    operator = '';
    currentNum = ''
    previousNum = previousNum.toString();
}

/**Arithmetic Functions**/
//Addition Function
function add() {
    previousNum = previousNum + currentNum;
    previousNum = roundNumber(previousNum);
    input.textContent = previousNum;
}

//Subtraction function
function subtract() {
    previousNum = previousNum - currentNum;
    previousNum = roundNumber(previousNum);
    input.textContent = previousNum;
}

//Multiplication Function
function multiply() {
    previousNum = previousNum * currentNum;
    previousNum = roundNumber(previousNum);
    input.textContent = previousNum;
}

//Division Function
function divide() {
    
    previousNum = previousNum / currentNum;
    previousNum = roundNumber(previousNum);
    input.textContent = previousNum;
    }

//Round number to 2 decimal places
function roundNumber (num) {
    return Math.round(num * 100) / 100;
}

function addDecimal() {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        input.textContent = currentNum;
    }
}


