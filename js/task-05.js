const inputField = document.querySelector('#name-input');
const visitorName = document.querySelector('#name-output');

inputField.addEventListener('input', () => {
    if (inputField.value === "") {
        visitorName.textContent = 'незнакомец';
        return;
    }
    visitorName.textContent = inputField.value;
});