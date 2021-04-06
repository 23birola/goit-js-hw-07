const inputField = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputField.addEventListener('input', () => text.style.fontSize = inputField.value + "px");
