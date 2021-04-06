const inputField = document.querySelector('#validation-input');

const inputValidation = () => {
    if (inputField.value.length === Number(inputField.dataset.length)) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
        return;
    }
    inputField.classList.add('invalid');
    inputField.classList.remove('valid');
}

inputField.addEventListener('blur', inputValidation);
