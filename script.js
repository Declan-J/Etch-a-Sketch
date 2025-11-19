/*
CREATE A 16x16 grid of square divs using JS ONLY!
- Use Flexbox to make divs appear as a grid (Not CSS Grid this time!)
*/

const container = document.querySelector("#container");

const div = document.createElement("div");
const tempText = document.createTextNode("Nice, Div!");

div.appendChild(tempText);
container.appendChild(div);