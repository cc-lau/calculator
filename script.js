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


//Display num on screen
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
function handleOperator (op) {
    operator = op;
    previousNum = currentNum;
    currentNum = "";
}

//Compute numbers if equal button is pressed
equalButton.addEventListener('click', () => {
    if(currentNum != "" && previousNum != "") {
        operate(operator, currentNum, previousNum);
    }
});

//Operate function to check operator and call correct function
function operate(operator, currentNum, previousNum) {
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

}

/**Arithmetic Functions**/
//Addition Function
function add (currentNum, previousNum) {
    previousNum = previousNum + currentNum;
    input.textContent = previousNum;
}

//Subtraction function
function subtract (currentNum, previousNum) {
    previousNum = previousNum - currentNum;
    input.textContent = previousNum;
}

//Multiplication Function
function multiply (currentNum, previousNum) {
    previousNum = previousNum * currentNum;
    input.textContent = previousNum;
}

//Division Function
function divide (currentNum, previousNum) {
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
*/