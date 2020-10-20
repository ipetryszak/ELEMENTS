const buttons = document.querySelectorAll('.control__element');
const sel = document.querySelectorAll('.control-select');

buttons.forEach(btn => btn.addEventListener('click',fun));
buttons.forEach(btn => btn.addEventListener('mouseover',toggleButtonHover));
buttons.forEach(btn => btn.addEventListener('mouseleave',toggleButtonHover));
sel.forEach(sl => sl.addEventListener('change',selAct));

function clearButtonsSelection() {
    buttons.forEach(obj =>
    {
        if(obj.classList.contains('control__element--active')) {
            obj.classList.remove('control__element--active');
        }
    });
}
function fun(e) {
    clearButtonsSelection();
    this.classList.add('control__element--active');
    let opt = document.querySelector(`.option-${this.classList[1]}`);
    opt.selected = true;
}

function selAct(e) {
    clearButtonsSelection();
    let selButton = document.querySelector(`.number-${this.selectedIndex + 1}`);
    selButton.classList.add('control__element--active');
}

function toggleButtonHover() {
    this.classList.toggle('control__element--hover')
}