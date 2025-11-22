//Set up container to push the grid into
const container = document.querySelector(".container");

//Variable number of squares per row
let girdSize = 16;
//Square rowCount to create square grid
for (let i=0; i<(girdSize*girdSize); i++) {
    const div = document.createElement("div");

    //Set Width & Height to be 100% / girdSize
    div.style.height = `calc(100% / ${girdSize})`
    div.style.width = `calc(100% / ${girdSize})`

    div.addEventListener('mouseover', (event) => {
        if (event.button == 0) 
        {
            event.currentTarget.style.backgroundColor = "gray"
        }
    });

    //Add grid class to new elements 
    div.classList.toggle("grid-cell");
    
    //Push to container
    container.appendChild(div);
}