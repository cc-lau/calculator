/*

//User input num1 & num2
let n1 = prompt("Enter num 1: ")
let operator = prompt("Enter operator: ")
let n2 = prompt("Enter num 2: ")
//Convert String input to Int
let num1 = parseInt(n1);
let num2 = parseInt(n2);

*/

//Addition Function
function add (num1, num2) {
    addValue = (num1 + num2)
    return addValue;
}

//Subtraction function
function subtract (num1, num2) {
    subtractValue = (num1 - num2)
    return subtractValue;
}

//Multiplication Function
function multiply (num1, num2) {
    multiplyValue = (num1 * num2);
    return multiplyValue;
}

//Division Function
function divide (num1, num2) {
    divideValue = (num1 / num2);
    return divideValue;
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

operate(operator, num1, num2);