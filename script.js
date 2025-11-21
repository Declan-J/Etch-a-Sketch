//Set up container to push the grid into
const container = document.querySelector(".container");

//Variable number of squares per row
let rowCount = 2;

//Square rowCount to create square grid
for (let i=0; i<(rowCount*rowCount); i++) {
    const div = document.createElement("div");

    //Add grid class to new elements 
    div.classList.toggle("grid-cell")
    
    //Push to container
    container.appendChild(div);
}