"use strict";
const MAX_X = 400;
const MAX_Y = 500;
const DEG = 360;
function createElement() {
    const modalBox = document.createElement('div');
    modalBox.classList.add('modal-box');
    return modalBox;
}
function makeNoise() {
    const element = document.querySelector('.modal-box');
    if (!element)
        throw Error;
    element.addEventListener('mousemove', e => {
        const posX = Math.floor((e.offsetX / MAX_X) * DEG / 10 - 15);
        const posY = Math.floor((e.offsetY / MAX_Y) * DEG / 10 - 15);
        console.log(posX, ' ', posY);
        element.style.transform = `rotateY(${posX}deg) rotateX(${posY}deg)`;
    });
}
document.body.appendChild(createElement());
makeNoise();
