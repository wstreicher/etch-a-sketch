let newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', generateNewGrid);

generateGrid(16, "black");

// Removes the current grid, if possible, and creates a new grid with the specified number of rows and column.
function generateGrid(num, style) {
    console.log(style)
    let container = document.querySelector('.container');
    while (container.firstChild) {
        container.replaceChildren(); 
    };

    let numSquare = num * num;
    for (let i = 0; i < numSquare; i++) {
       let newCell = document.createElement('div');
       newCell.classList.add('cell');
       container.appendChild(newCell);
       if (style == "random") {
        newCell.addEventListener('mouseover', changeColorRandom);
       } else if (style == "darken") {
        newCell.addEventListener('mouseover', changeColorDarken);
       } else {
        newCell.addEventListener('mouseover', changeColorBlack)
       }
    };

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
};

// Prompts the user for input, which it uses to generate a new grid.
function generateNewGrid() {
    let gridInput = parseInt(window.prompt("Enter a number between 1-100:"));
    let styleInput = window.prompt('Please specify the style: ("black", "random", or "darken." Will default to "black.")').toLowerCase();

    // Defaults to 16 for invalid inputs.
    if ((gridInput < 1) || (gridInput > 100) || (isNaN(gridInput))){
        gridInput = 16;
    };

    generateGrid(gridInput, styleInput);
};

// Changes the color of a cell to black when it is moused over.
function changeColorBlack() {
    this.style.backgroundColor = "black";
};

// Changes the color of a cell to a randomly-generated color when it is moused over.
function changeColorRandom() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
};

// Changes the color of a cell by slightly darkening it 10% at a time.
function changeColorDarken() {
    let change = parseFloat(window.getComputedStyle(this).backgroundColor.match(/[^,]+(?=\))/));
    let change2 = window.getComputedStyle(this).backgroundColor.replace(/[^,]+(?=\))/, `${change + .1}`);
    this.style.backgroundColor = change2;
}