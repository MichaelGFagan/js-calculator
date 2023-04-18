let numA = 0;
let numB = 0;
let operator = '';
let displayNumber = '0';
let isOperatorActive = false;
let isResetActive = true;

display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        inputNumber = e.target.textContent;
        if (!(displayNumber === "0" && inputNumber === "0")) {
            if (isResetActive) {
                isResetActive = false;
                displayNumber = '';
            };
            if (isOperatorActive) {
                isOperatorActive = false;
            };
            displayNumber = displayNumber + inputNumber;
            updateDisplay(displayNumber);
        }
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        symbol = e.target.textContent
        if (symbol === '+') {
            operator = 'add';
        }
        else if (symbol === '-') {
            operator = 'subtract';
        }
        else if (symbol === '*') {
            operator = 'multiply';
        }
        else if (symbol === '/') {
            operator = 'divide';
        }
        numA = Number(displayNumber);
        isOperatorActive = true;
        isResetActive = true;
    })
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', (e) => {
    if (operator) {
        numB = Number(displayNumber);
        displayNumber = operate(numA, numB, operator);
        updateDisplay(displayNumber);
    };
});

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', (e) => {
    numA = 0;
    numB = 0;
    operator = '';
    displayNumber = '0';
    isOperatorActive = false;
    isResetActive = true;
    updateDisplay(displayNumber);
});

function updateDisplay(displayNumber) {
    display.value = displayNumber;
}

function operate(numA, numB, operator) {
    if (operator === 'add') {
        return add(numA, numB);
    }
    else if (operator === 'subtract') {
        return substract(numA, numB);
    }
    else if (operator === 'multiply') {
        return multiply(numA, numB);
    }
    else if (operator === 'divide') {
        return divide(numA, numB);
    };
};

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};