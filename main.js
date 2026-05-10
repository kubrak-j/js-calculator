const numButtons = document.querySelectorAll(`.numBtn`);
const displayInput = document.getElementById('displayInput');

console.log(numButtons);

numButtons.forEach((item) => {item.onclick = () => {displayInput.value += item.textContent}});