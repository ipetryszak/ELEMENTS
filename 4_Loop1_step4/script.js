window.addEventListener('load', updateContent);

function CreateContent(main,btn1,btn2) {
    this.main = main;
    this.btn = [btn1,btn2];
}

//array of steps containing content and button values
let steps = [
    new CreateContent('Choose title content',undefined,'Submit title'),
    new CreateContent('Choose description content', 'Back', 'Submit description'),
    new CreateContent('Are you happy now?','No, go back','Yes, go ahead'),
    new CreateContent('Ok, we are done. Thanks for sending us your data!')
]
let currentStep = 0;

//left navigation menu
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationNumber = document.querySelectorAll('.navigation__number')
navigationLinks.forEach(link => link.addEventListener('click',handleNavLink));

function handleNavLink(e) {
    'use strict'
    navigationLinksTransition.call(this);
    updateContent();
}
function navigationLinksTransition() {
    'use strict'
    let inBetween = true;
    if(this!==undefined)
    {
        navigationLinks.forEach((link,index) => {
            if(inBetween) {
                link.classList.add('navigation__link--active');
                navigationNumber[index].classList.add('navigation__number--active');
                currentStep = index;
            }
            else {
                inBetween = false;
                link.classList.remove('navigation__link--active');
                navigationNumber[index].classList.remove('navigation__number--active');
            }
            if(this===link) inBetween = false;
        })
    }
    else {
        for(let i=0; i<navigationLinks.length; i++) {
            if(i <= currentStep) {
                navigationLinks[i].classList.add('navigation__link--active');
                navigationNumber[i].classList.add('navigation__number--active');
            }
            else {
                navigationLinks[i].classList.remove('navigation__link--active');
                navigationNumber[i].classList.remove('navigation__number--active');
            }
        }
    }

}

const navigationText = document.querySelector('.navigation__text');
const buttonLeft = document.querySelector('.button__left');
const buttonRight = document.querySelector('.button__right');

function updateContent() {
    navigationText.textContent = steps[currentStep].main;
    if(steps[currentStep].btn[0] !== undefined) {
        buttonLeft.style.display = 'inline-block';
        buttonLeft.textContent = steps[currentStep].btn[0];
    }
    else {
        buttonLeft.style.display = 'none';
    }

    if(steps[currentStep].btn[1] !== undefined) {
        buttonRight.style.display = 'inline-block';
        buttonRight.textContent = steps[currentStep].btn[1];
    }
    else {
        buttonRight.style.display = 'none';
    }

}

buttonLeft.addEventListener('click',handlerLeftButton);
buttonRight.addEventListener('click',handlerRightButton);

function handlerLeftButton(e) {
    if(currentStep > 0) {
        currentStep--;
        updateContent();
        navigationLinksTransition();
    }
}

function handlerRightButton(e) {
    if(currentStep < 3) {
        currentStep++;
        updateContent();
        navigationLinksTransition();
    }
}