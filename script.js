const body = document.querySelector('body');
const container = document.createElement('div');

container.className = "container";

body.appendChild(container)

for (let i=0;i<256;i++) {
    const square = document.createElement('div');
    square.className = "square";
    container.appendChild(square);
}
