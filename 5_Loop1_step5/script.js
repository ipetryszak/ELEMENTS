let text = ['We can help you with ', ' design', ' frontend', ' backend', ' testing', ' design'];

let textParagraph = document.querySelector('.text');
let textCursor = document.querySelector('.text__cursor');
textParagraph.textContent = text[0];

let flag = true;
(function blink() {
    textCursor.classList.toggle('text__cursor--blink');
    if(flag) setTimeout(blink,400);
})();

let i = 0;
let arrEl = 1;
(function typing(){
    'use strict';
    if(i<text[arrEl].length) {
        textParagraph.textContent += text[arrEl].charAt(i);
        i++;
        setTimeout(typing,200);
    }
    else if(i === text[arrEl].length) {
        setTimeout(typing,1000);
        i++;
    }
    else if(i > text[arrEl].length && arrEl < text.length - 1) {
        textParagraph.textContent = text[0];
        arrEl++;
        i = 0;
        typing();
    }
    else {
        flag = false;
        textCursor.classList.remove('text__cursor--blink');
    }
})();




