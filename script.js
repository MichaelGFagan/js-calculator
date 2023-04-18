let numA = 0;
let numB = 0;
let operator = 'add';
let displayNumber = '';

display = document.querySelector('#display');

const buttons = document.querySelectorAll('.number');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        displayNumber = displayNumber + e.target.textContent;
        updateDisplay(displayNumber);
    });
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