"use strict";
var MARGIN = 150;
var MAX_ELEMENTS = 7;
var MODIFIERS = {
    visible: 'block--visible'
};
function createComponent(numb) {
    var container = document.createElement('div');
    container.classList.add('container');
    for (var i = 0; i < numb; i++) {
        var block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block);
    }
    return container;
}
function display() {
    var blocks = document.querySelectorAll('.block');
    function addClass() {
        blocks.forEach(function (el) {
            var ele = el;
            var val = ele.getBoundingClientRect().top;
            if (val + MARGIN < window.innerHeight)
                ele.classList.add(MODIFIERS.visible);
        });
    }
    addClass();
    window.addEventListener('scroll', addClass);
}
document.body.appendChild(createComponent(MAX_ELEMENTS));
display();
