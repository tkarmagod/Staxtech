// Get a reference to the calculator display
const display = document.getElementById('display');

// Get references to all the buttons
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let firstOperand = null;
let isOperatorClicked = false;

// Function to update the display
function updateDisplay() {
    display.value = currentInput;
}

// Function to handle number and dot button clicks
function handleNumber(number) {
    if (number === '.' && currentInput.includes('.')) {
        return; // Prevents multiple dots
    }
    
    if (isOperatorClicked) {
        currentInput = number;
        isOperatorClicked = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Function to handle operator button clicks
function handleOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    }
    operator = op;
    isOperatorClicked = true;
}

// Function to handle the equals button
function handleEquals() {
    if (firstOperand === null || currentInput === '' || operator === null) {
        return;
    }
    const secondOperand = parseFloat(currentInput);
    const result = calculate(firstOperand, operator, secondOperand);
    currentInput = result.toString();
    firstOperand = null;
    operator = null;
    isOperatorClicked = false;
    updateDisplay();
}

// Function to handle the clear button
function handleClear() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    isOperatorClicked = false;
    updateDisplay();
}

// The main calculation function
function calculate(num1, op, num2) {
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('dot')) {
            handleNumber(value);
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equal')) {
            handleEquals();
        } else if (button.classList.contains('clear')) {
            handleClear();
        }
    });
});