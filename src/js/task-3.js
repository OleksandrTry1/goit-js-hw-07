const refs = {
    nameInput: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output')
}

function onInputChanges(event) {
    const currentText = event.target.value
    refs.nameSpan.textContent = currentText.trim() != '' ? currentText.trim() : 'Anonymous'
}
refs.nameInput.addEventListener('input', onInputChanges)