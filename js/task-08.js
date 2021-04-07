const numberEl = +document.querySelector('input').value;
const boxesContainerEl = document.querySelector('#boxes');
const getRandom = function (max) {
    return Math.floor(Math.random() * max);
}
const boxes = [];
const createBoxes = function (amount) {
    let boxHeight = 30;
    let boxWidth = 30;
    for (let i = 1; i <= amount; i += 1) {
        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;

        if (i > 1) {
            boxHeight += 10;
            boxWidth += 10;
        }
        boxEl.style.height = `${boxHeight}px`;
        boxEl.style.width = `${boxWidth}px`;
        boxes.push(boxEl);
    }
    boxesContainerEl.append(...boxes);
}

const createBtn = document.querySelector('button[data-action="render"]');
createBtn.addEventListener('click', createBoxes(numberEl));
const clearBtn = document.querySelector('button[data-action="destroy"]');
clearBtn.addEventListener('click', () => boxesContainerEl.innerHTML = '');


