const MARGIN: number = 150;
const MAX_ELEMENTS: number = 7;
let MODIFIERS = {
    visible: 'block--visible'
}

function createComponent(numb: number): HTMLElement {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('container');

    for(let i: number = 0; i < numb; i++) {
        const block: HTMLElement = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block);
    }

    return container;
}

function display(){
    const blocks: NodeList = document.querySelectorAll('.block') as NodeList;

    function addClass() {
        blocks.forEach(el => {
            const ele = el as Element;
            const val = ele.getBoundingClientRect().top;
            if(val + MARGIN < window.innerHeight) ele.classList.add(MODIFIERS.visible)

        })
    }
    addClass()
    window.addEventListener('scroll',addClass);
}

document.body.appendChild(createComponent(MAX_ELEMENTS));
display();
