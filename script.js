//Set up container to push the grid into
const container = document.querySelector(".container");

//Variable number of squares per row
let rowCount = 16;
//Square rowCount to create square grid
for (let i=0; i<(rowCount*rowCount); i++) {
    const div = document.createElement("div");

    //Set Width & Height to be 100% / rowCount
    div.style.height = `calc(100% / ${rowCount})`
    div.style.width = `calc(100% / ${rowCount})`

    //Add grid class to new elements 
    div.classList.toggle("grid-cell")
    
    //Push to container
    container.appendChild(div);
}