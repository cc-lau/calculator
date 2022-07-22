//Button Variables
const input = document.querySelector('.screen')
const numButton = document.querySelectorAll('.num')
const opButton = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')

//Display num on screen
numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        input.textContent += value
    })
})

opButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const operator = e.target.dataset.value
        input.textContent += operator
    })
})

/* CLEAR AND DELETE BUTTON ----- TO FIX
clearButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        input.textContent += value
    })
})

deleteButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        input.textContent += value
    })
})
*/

/**Arithmetic Functions**/
//Addition Function
function add (num1, num2) {
    addValue = (num1 + num2)
    input.textContent = addValue;
}

//Subtraction function
function subtract (num1, num2) {
    subtractValue = (num1 - num2)
    input.textContent = subtractValue;
}

//Multiplication Function
function multiply (num1, num2) {
    multiplyValue = (num1 * num2);
    input.textContent = multiplyValue;
}

//Division Function
function divide (num1, num2) {
    divideValue = (num1 / num2);
    input.textContent = divideValue;
}

//Operate function to check operator and call correct function
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            alert(add(num1, num2));
            break;
        case "-":
            alert(subtract(num1, num2));
            break;       
        case "*":
            alert(multiply(num1, num2));
            break;
        case "/":
            alert(divide(num1, num2));
            break;
    }

}
//operate(operator, num1, num2);
