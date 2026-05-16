const numButtons = document.querySelectorAll(`.numBtn`);
const displayInput = document.getElementById(`displayInput`);
const acBtn = document.getElementById(`acBtn`);
const equalsBtn = document.getElementById(`equalsBtn`);
const operatorBtns = document.querySelectorAll(`.actionBtn`);
let num1 = null;
let num2 = null;
let action = null;
let result = null;
numButtons.forEach((item) => {
    item.onclick = () => {
        if (result !== null || displayInput.value.includes("Error")) {
            result = null;
            num2 = null;
            displayInput.value = ``;
        }
        if (displayInput.value === `0`) {
            displayInput.value = ``;
        }
        displayInput.value += item.textContent;
    };
});
operatorBtns.forEach((item) => {
    item.onclick = () => {
        action = item.textContent;
        num1 = Number(displayInput.value);
        displayInput.value = ``;
    };
});
equalsBtn.onclick = calculate;
function calculate() {
    if (result === null) {
        num2 = Number(displayInput.value);
    }
    if (num1 !== null && num2 !== null) {
        switch (action) {
            case `+`:
                result = num1 + num2;
                displayInput.value = String(result);
                break;
            case `-`:
                result = num1 - num2;
                displayInput.value = String(result);
                break;
            case `*`:
                result = num1 * num2;
                displayInput.value = String(result);
                break;
            case `/`:
                if (num2 === 0) {
                    displayInput.value = `Error: You can't divide by zero`;
                }
                else {
                    result = num1 / num2;
                    displayInput.value = String(result);
                }
                break;
        }
        num1 = result;
    }
    else {
        return;
    }
}
acBtn.onclick = () => {
    num1 = null;
    num2 = null;
    action = null;
    result = null;
    displayInput.value = `0`;
};
export {};
//# sourceMappingURL=main.js.map