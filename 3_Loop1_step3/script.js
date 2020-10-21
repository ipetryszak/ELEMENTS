const checkBoxes = document.querySelectorAll(`input[type="checkbox"]`);

checkBoxes.forEach(el => el.addEventListener('click',clickHandler));

function clickHandler(e) {
    checkBoxes.forEach(el => {
        if(this !== el) {
            el.checked = Math.random() >= 0.5;
        }
    })
}