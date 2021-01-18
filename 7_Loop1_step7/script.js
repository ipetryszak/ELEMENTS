"use strict";
function createElement() {
    var element = document.createElement('div');
    element.classList.add('container');
    return element;
}
function addContainers() {
    document.addEventListener('click', function (e) {
        document.addEventListener('mouseout', function (e) {
            document.addEventListener('mouseenter', function (e) {
                for (var i = 0; i < 5; i++)
                    document.body.appendChild(createElement());
            }, { once: true });
        }, { once: true });
    }, { once: true });
}
addContainers();
