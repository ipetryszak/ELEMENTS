function createElement(): HTMLElement {
    const element: HTMLElement = document.createElement('div');
    element.classList.add('container');
    return element;
}

function addContainers() {
    document.addEventListener('click',e => {
        document.addEventListener('mouseout', e => {
            document.addEventListener('mouseenter', e=> {
                for(let i: number = 0; i<5; i++)
                    document.body.appendChild(createElement());
            },{once: true})
        }, {once: true})

    }, {once: true})
}

addContainers();



