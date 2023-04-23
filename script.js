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
            buttonInput(inputNumber);
        }
    });
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', (e) => {
    if (!displayNumber.includes('.')) {
        buttonInput('.');
    }
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
        isResetActive = true;
    };
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
    resetDisplay();
});

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', (e) => {
    if (!isResetActive) {
        if (displayNumber.length === 1) {
            updateDisplay('0');
        }
        else {
            displayNumber = displayNumber.slice(0, -1)
            updateDisplay(displayNumber);
        }
    };
});

function buttonInput(inputNumber) {
    if (isResetActive) {
        isResetActive = false;
        displayNumber = '';
    };
    displayNumber = displayNumber + inputNumber;
    updateDisplay(displayNumber);
};

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

function countDecimal(num) {
    const numString = String(num);
    if (numString.includes('.')) {
        return numString.split('.')[1].length
    };
    return 0;
}

function operate(numA, numB, operator) {
    numADecimal = countDecimal(numA);
    numBDecimal = countDecimal(numB);
    correction = 10 **(Math.max(numADecimal, numBDecimal) + 1);
    numA *= correction;
    numB *= correction;
    if (operator === 'add') {
        result = add(numA, numB);
    }
    else if (operator === 'subtract') {
        result = substract(numA, numB);
    }
    else if (operator === 'multiply') {
        result = multiply(numA, numB);
    }
    else if (operator === 'divide') {
        result = divide(numA, numB);
    };
    return result / correction;
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