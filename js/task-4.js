const refs = {
    loginForm: document.querySelector('.login-form')
};

function formValidation(form) {
    const inputs = [...form.elements].filter(el => el.tagName !== 'BUTTON' && el.type !== 'submit');
    const allFilled = inputs.every(element => element.value.trim() !== '');

    if (!allFilled) {
        alert('All form fields must be filled in');
        return false;
    }
    return true;
}

function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    
    if (!formValidation(form)) {
        return;
    }

    const submitData = {};
    
    [...form.elements].forEach(element => {
        if (element.name) {
            submitData[element.name] = element.value;
        }
    });

    refs.loginForm.reset()

    console.log(submitData);
    return submitData;
}

refs.loginForm.addEventListener('submit', onSubmit);
