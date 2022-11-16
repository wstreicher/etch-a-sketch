let newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', generateNewGrid);
let cells = document.querySelectorAll('.cell');

generateGrid(16);


// Removes the current grid, if possible, and creates a new grid with the specified number of rows and column.
function generateGrid(num) {
    let container = document.querySelector('.container');
    while (container.firstChild) {
        container.replaceChildren(); 
    };

    let numSquare = num * num;
    for (let i = 0; i < numSquare; i++) {
       let newCell = document.createElement('div');
       newCell.classList.add('cell');
       container.appendChild(newCell);
    };

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
};

// Prompts the user for input, which it uses to generate a new grid.
function generateNewGrid() {
    let input = parseInt(window.prompt("Enter a number between 1-100:"));
    if ((input == null) || (input < 1) || (input > 100) ){
        return;
    };
    generateGrid(input);
    return;
};

