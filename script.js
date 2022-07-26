//Button Variables
const input = document.querySelector('.screen')
const numButton = document.querySelectorAll('.num')
const opButton = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
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
    input.textContent = '';
    currentNum = '';
    previousNum = '';
});

//Get operator button data value
opButton.forEach(button => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.dataset.value)
    })
})

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

function operatorCheck(text) {
    operator = text;
    currentNum = '';
}

function test() {
    if (currentNum != "" && previousNum != "") {
        operate();
    }
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
            divide(currentNum, previousNum);
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
    input.textContent = previousNum;
}

//Subtraction function
function subtract() {
    previousNum = previousNum - currentNum;
    input.textContent = previousNum;
}

//Multiplication Function
function multiply() {
    previousNum = previousNum * currentNum;
    input.textContent = previousNum;
}

//Division Function
function divide() {
    previousNum = previousNum / currentNum;
    input.textContent = previousNum;
}


/* DELETE BUTTON ----- TO FIX
deleteButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        input.textContent += value
    })
})




if (operator = '+') {
        add(currentNum, previousNum);
}
        else if (operator = '-') {
        subtract(currentNum, previousNum);
    }   else if (operator = '*') {    
        multiply(currentNum, previousNum);
    }   else if (operator = '/') {
        divide(currentNum, previousNum);
    }
*/