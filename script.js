let runningTotal = 0;
let operator = '';
let displayNumber = '0';
let numbersEntered = 0;
let isResetActive = true;
let isOperatorActive = false;

display = document.querySelector('#display');

window.addEventListener('keydown', handleKeyboardInput)

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        inputNumber = e.target.textContent;
        buttonInput(inputNumber);
    });
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', (e) => {
    buttonInput('.');
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        symbol = e.target.textContent;
        setOperator(symbol);
    })
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', (e) => {
    clickEquals();
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
    resetDisplay();
});

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', (e) => {
    clickBackspace();
});


function handleKeyboardInput(e) {
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9 && e.key != ' ') buttonInput(e.key)
    if (e.key === '.') buttonInput(e.key)
    if (e.key === '=' || e.key === 'Enter') clickEquals()
    if (e.key === 'Backspace') clickBackspace()
    if (e.key === 'Escape') resetDisplay()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') setOperator(e.key)
};

function clickEquals() {
    if (operator && !isResetActive) {
        numB = Number(displayNumber);
        runningTotal = operate(runningTotal, numB, operator);
        displayNumber = runningTotal;
        updateDisplay(displayNumber);
        operator = '';
        isResetActive = true;
    };
};

function clickBackspace() {
    if (!isResetActive) {
        if (displayNumber.length === 1) {
            displayNumber = 0;
            isResetActive = true;
        }
        else {
            displayNumber = displayNumber.slice(0, -1)
        }
        updateDisplay('0');
    };
};

function buttonInput(inputNumber) {
    if ( !(displayNumber === "0" && inputNumber === "0") || (!displayNumber.includes('.') && inputNumber === '.') )
    if (isResetActive) {
        isResetActive = false;
        displayNumber = '';
    };
    displayNumber = displayNumber + inputNumber;
    updateDisplay(displayNumber);
    isOperatorActive = false;
};

function setOperator(symbol) {
    if (!isOperatorActive) {
        if (operator) {
            numB = Number(displayNumber);
            runningTotal = operate(runningTotal, numB, operator);
            displayNumber = runningTotal;
            updateDisplay(displayNumber);
        }
        else {
            runningTotal = Number(displayNumber);
        };
    }
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
    isResetActive = true;
    isOperatorActive = true;
};

function resetDisplay() {
    runningTotal = 0;
    numB = 0;
    operator = '';
    displayNumber = '0';
    isResetActive = true;
    isOperatorActive = false;
    updateDisplay(displayNumber);
};

function updateDisplay(displayNumber) {
    display.value = displayNumber;
};

function countDecimal(num) {
    const numString = String(num);
    if (numString.includes('.')) {
        return numString.split('.')[1].length;
    };
    return 0;
}

function operate(numA, numB, operator) {
    numADecimal = countDecimal(numA);
    numBDecimal = countDecimal(numB);
    if (operator === 'add') {
        correction = 10 ** (Math.max(numADecimal, numBDecimal) + 1);
        numA *= correction;
        numB *= correction;
        result = add(numA, numB);
        return result / correction;
    }
    else if (operator === 'subtract') {
        correction = 10 ** (Math.max(numADecimal, numBDecimal) + 1);
        numA *= correction;
        numB *= correction;
        result = substract(numA, numB);
        return result / correction;
    }
    else if (operator === 'multiply') {
        correction = 10 ** Math.max(numADecimal, numBDecimal);
        numA *= correction;
        numB *= correction;
        console.log(numA, numB);
        result = multiply(numA, numB);
        return result;
    }
    else if (operator === 'divide') {
        result = divide(numA, numB);
        return result;
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