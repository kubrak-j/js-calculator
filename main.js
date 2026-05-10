const numButtons = document.querySelectorAll(`.numBtn`);
const displayInput = document.getElementById(`displayInput`);
const acBtn = document.getElementById(`acBtn`);
const equalsBtn = document.getElementById(`equalsBtn`);
const operatorBtns = document.querySelectorAll(`.operatorBtn`);
let operator = null;

numButtons.forEach((item) => {item.onclick = () => {displayInput.value += item.textContent}});

operatorBtns.forEach((item) => {item.onclick = () => {operator = item.textContent}});

acBtn.onclick = () => {displayInput.value = `0`};