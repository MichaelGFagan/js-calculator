let runningTotal = 0;
let operator = '';
let displayNumber = '0';
let numbersEntered = 0;
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
            displayNumber = displayNumber + inputNumber;
            updateDisplay(displayNumber);
        }
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        symbol = e.target.textContent;
        if (operator) {
            numB = Number(displayNumber);
            runningTotal = operate(runningTotal, numB, operator);
            displayNumber = runningTotal;
            updateDisplay(displayNumber);
        }
        else {
            runningTotal = Number(displayNumber);
        };
        setOperator(symbol);
        isResetActive = true;
    })
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', (e) => {
    if (operator && !isResetActive) {
        numB = Number(displayNumber);
        runningTotal = operate(runningTotal, numB, operator);
        displayNumber = runningTotal;
        updateDisplay(displayNumber);
        operator = '';
    };
});

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', (e) => {
    resetDisplay();
});

function setOperator(symbol) {
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
};

function resetDisplay() {
    runningTotal = 0;
    numB = 0;
    operator = '';
    displayNumber = '0';
    isResetActive = true;
    updateDisplay(displayNumber);
};

function updateDisplay(displayNumber) {
    display.value = displayNumber;
};

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