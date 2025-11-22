//Used to draw when clicking or holding left mouse button
let isDrawing = false;

let activeMouseButton = 0;

//Set up the container of the grid
const container = document.querySelector(".container");

let cellColor = "skyblue";

//Prevent right-click context menu in grid
container.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
//Prevent drawing from sticking when leaving the grid container
container.addEventListener('mouseleave', ((e) => {
    isDrawing = false;
    activeMouseButton = 0;
}));

//Variable number of squares per row
let girdSize = 16;
createGrid(girdSize);

function changeColor(mouseEvent, color) {
    const buttonUsed = isDrawing ? activeMouseButton :mouseEvent.button;

    if(buttonUsed == 0) {
        mouseEvent.currentTarget.style.backgroundColor = `${color}`;
    }
    else if (buttonUsed == 2) {
        getRandomColor()
        mouseEvent.currentTarget.style.backgroundColor = `rgb(${r},${g},${b})`
    }
};

//Generate Random RGB value between 0-255
let r, g, b = 0;
function getRandomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
}

function resetGrid() {
    const allGridCells = document.querySelectorAll(".grid-cell");
    allGridCells.forEach(cell => {
        cell.style.backgroundColor = "";
    });
    isDrawing = false;
}

function createNewGrid() {
    let newGridSize = prompt("Please enter the number (1-100) of squares per side for the new grid. (Limit: 100)", 16);

    if (newGridSize > 0 && newGridSize < 100) {
        //remove existing grid
        removeGrid();

        //generate new grid in the container.
        createGrid(newGridSize);
        isDrawing = false;
    }
    else alert("Invalid value. Please enter a number between 1 - 100.")
}

function removeGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(girdSize) {
    //Square gridSize to create square grid
    for (let i = 0; i < (girdSize * girdSize); i++) {
        const div = document.createElement("div");

        //Set Width & Height to be 100% / girdSize
        div.style.height = `calc(100% / ${girdSize})`
        div.style.width = `calc(100% / ${girdSize})`

        div.addEventListener('mousedown', (e) => {
            isDrawing = true;
            activeMouseButton = e.button;
            changeColor(e, `${cellColor}`);
        });

        div.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                changeColor(e, `${cellColor}`);
            }
        });

        div.addEventListener('mouseup', () => {
            isDrawing = false;
            activeMouseButton = 0;
        })

        //Add grid class to new elements 
        div.classList.toggle("grid-cell");

        //Prevent unintended dragging of grid cells
        div.setAttribute("draggable", "false")
        div.addEventListener('dragstart', (e) => {
            e.preventDefault();
            isDrawing = false;
        })

        //Push to container
        container.appendChild(div);
    }
}