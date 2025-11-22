//Set up the container of the grid
const container = document.querySelector(".container");

//Used to draw when clicking or holding left mouse button
let isDrawing = false;

//Variable number of squares per row
let girdSize = 16;
//Square rowCount to create square grid
for (let i=0; i<(girdSize*girdSize); i++) {
    const div = document.createElement("div");

    //Set Width & Height to be 100% / girdSize
    div.style.height = `calc(100% / ${girdSize})`
    div.style.width = `calc(100% / ${girdSize})`

    div.addEventListener('mousedown', (e) => {
        isDrawing = true;
        changeColor(e, "gray");
    });

    div.addEventListener('mousemove', (e) => {
        if(isDrawing){
            changeColor(e, "gray");
        }
    });

    div.addEventListener('mouseup', () => {
        isDrawing = false;
    })

    //Add grid class to new elements 
    div.classList.toggle("grid-cell");
    
    //Push to container
    container.appendChild(div);
}

function changeColor (mouseEvent, color) {
    if (mouseEvent.button == 0) {
        mouseEvent.currentTarget.style.backgroundColor = `${color}`   
    }
}