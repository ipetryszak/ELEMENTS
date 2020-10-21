
const kindOfContent = ['Positive content', 'Negative content', 'Neutral content'];

const changeButton = document.querySelector('.tab__button');
const buttonsNoFrame = document.querySelectorAll('.tab__button--no-frame');

changeButton.addEventListener('click',textButtonHandler);
buttonsNoFrame.forEach(btn => btn.addEventListener('click',noFrameButtonHandler));

function textButtonHandler(event) {
    event.preventDefault();
    const textElement = document.querySelector('.tab__text');
    const number = textElement.value - 1;
    textElement.value = '';

    if( number > 2 || number < 0 ) {
        alert('Invalid number - please insert number in range of 1 - 3');
    }
    else {
        onFocused(number);
        changeText(number);
    }
}

function noFrameButtonHandler(event) {
    buttonsNoFrame.forEach((obj,index) => {
        if(obj === this) {
            onFocused(this);
            changeText(index);
        }
    })
}

function changeText(number) {
    document.querySelector('.tab__text-display').textContent = kindOfContent[number];
}

function onFocused(element) {
    buttonsNoFrame.forEach(btn => btn.classList.remove("tab__button--no-frame--active"));
    if(typeof element === 'object') element.classList.add("tab__button--no-frame--active");
    if(typeof element === 'number') buttonsNoFrame[element].classList.add("tab__button--no-frame--active");
}