const body = document.querySelector('body');
const container = document.createElement('div');
const button = document.querySelector('.btn');

let grid = 16
container.className = "container";

body.appendChild(container)

for (let i=0;i<256;i++) {
    const square = document.createElement('div');
    square.className = "square";
    container.appendChild(square);
}

const squares = document.querySelectorAll(".square");
squares.forEach( square => square.addEventListener('mouseover',function () {
    square.classList.add("hovering");
}))

function reset() {
    const beGone = document.querySelectorAll(".hovering");
    beGone.forEach( square => square.classList.remove("hovering"))
    let gridSize = prompt("Please enter a new grid size: (Max size = 100)", 100);
    container.style.setProperty('--grid-size', gridSize);
    container.innerHTML = "";
    for (let i=0;i<(gridSize*gridSize);i++) {
        const square = document.createElement('div');
        square.className = "square";
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover',function() {square.classList.add("hovering")}))
}

button.addEventListener('click', function () {reset()})