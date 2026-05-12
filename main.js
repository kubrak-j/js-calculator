const numButtons = document.querySelectorAll(`.numBtn`);
const displayInput = document.getElementById(`displayInput`);
const acBtn = document.getElementById(`acBtn`);
const equalsBtn = document.getElementById(`equalsBtn`);
const operatorBtns = document.querySelectorAll(`.operatorBtn`);

let operator = null;

let previousNum = null;
let currentNum = null;

let result = null;

numButtons.forEach((item) => {item.onclick = () => {

    if(displayInput.value === 0 || displayInput.value === `0`){
        displayInput.value = ``;
    }
    displayInput.value += item.textContent;
}});

operatorBtns.forEach((item) => {item.onclick = () => {
    operator = item.textContent;
    let firstInputNum = displayInput.value;
    previousNum = Number(firstInputNum);
    displayInput.value = ``;
}});

equalsBtn.onclick = calculate;

function calculate() {

    try {

        let secondInputNum = displayInput.value;
        currentNum = Number(secondInputNum);

        if(operator === `+`){
            result = previousNum + currentNum;
            displayInput.value = result;
        }
        else if(operator === `-`){
            result = previousNum - currentNum;
            displayInput.value = result;
        }
        else if(operator === `*`){
            result = previousNum * currentNum;
            displayInput.value = result;
        }
        else if(operator === `/`){
            if(currentNum === 0 || currentNum === `0`){
                displayInput.value = `Error: You can't divide by zero`;
            }
            else {
                result = previousNum / currentNum;
                displayInput.value = result;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}

acBtn.onclick = () => {
    previousNum = null;
    currentNum = null;
    result = null;
    displayInput.value = `0`;
};