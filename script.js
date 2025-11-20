/*
CREATE A 16x16 grid of square divs using JS ONLY!
- Use Flexbox to make divs appear as a grid (Not CSS Grid this time!)
*/

const container = document.querySelector(".container");

//create all divs
for (let i=0; i<16; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid-cell")
    container.appendChild(div);
}


/*
For each div

Apply style to div to make it appear in a grid.

    border
    width
    height

    display flex 
    justify content
    flex row, wrap
*/
