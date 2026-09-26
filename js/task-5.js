const refs = {
    spanText: document.querySelector('.color'),
    changeColorButton: document.querySelector('.change-color')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
    const randomHex = getRandomHexColor()
    document.body.style.backgroundColor = randomHex
    refs.spanText.textContent = randomHex
}
refs.changeColorButton.addEventListener('click', onBtnClick)