const numButtons = document.querySelectorAll(`.numBtn`);
const displayInput = document.getElementById(`displayInput`);
const acBtn = document.getElementById(`acBtn`);
const equalsBtn = document.getElementById(`equalsBtn`);
const operatorBtns = document.querySelectorAll(`.actionBtn`);

let num1 = null;
let num2 = null;

let action = null;
let result = null;

numButtons.forEach((item) => {item.onclick = () => {

    if(result !== null || displayInput.value.includes("Error")){
        result = null;
        displayInput.value = ``;
    }

    if(displayInput.value === `0`){
        displayInput.value = ``;
    }
    displayInput.value += item.textContent;
}});

operatorBtns.forEach((item) => {item.onclick = () => {
    action = item.textContent;
    num1 = Number(displayInput.value);
    displayInput.value = ``;
}});

equalsBtn.onclick = calculate;

function calculate() {

    num2 = Number(displayInput.value);

    switch (action) {
        case `+`:
            result = num1 + num2;
            displayInput.value = result;
            break;
        case `-`:
            result = num1 - num2;
            displayInput.value = result;
            break;
        case `*`:
            result = num1 * num2;
            displayInput.value = result;
            break;
        case `/`:
            if(num2 === 0){
                displayInput.value = `Error: You can't divide by zero`;
            }
            else {
                result = num1 / num2;
                displayInput.value = result;
            }
            break;
    }
}

acBtn.onclick = () => {
    num1 = null;
    num2 = null;
    action = null;
    result = null;
    displayInput.value = `0`;
};