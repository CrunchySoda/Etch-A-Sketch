

//Holds all smaller drawable divs
let gridDrawSquares = [];
let color = 'black'
let gridSize = '16'

const etchGrid = document.querySelector('.etch-grid');
const mainContain = document.querySelector('.main-contain');
const redButton = document.querySelector('.red');
const yellowButton = document.querySelector('.yellow');
const blueButton = document.querySelector('.blue');
const greenButton = document.querySelector('.green');
const orangeButton = document.querySelector('.orange');
const purpleButton = document.querySelector('.purple');
const blackButton = document.querySelector('.black');
const clearButton = document.querySelector('.clear');
const whiteButton = document.querySelector('.white');
const slider = document.querySelector('.slider');


function draw(){ // changes div background color on mouseover
    for(let index = 0; index < gridDrawSquares.length; index++) {
        gridDrawSquares[index].addEventListener('mouseover', ()=> {
            gridDrawSquares[index].style.backgroundColor = color;
            
        })
    }
}
function getColor(){ 
    redButton.addEventListener('click', ()=> {color = 'red'});
    yellowButton.addEventListener('click', ()=> {color = 'yellow'});
    blueButton.addEventListener('click', ()=> {color = 'blue'});
    greenButton.addEventListener('click', ()=> {color = 'green'});
    orangeButton.addEventListener('click', ()=> {color = 'orange'});
    purpleButton.addEventListener('click', ()=> {color = 'purple'});
    blackButton.addEventListener('click', ()=> {color = 'black'});
    whiteButton.addEventListener('click', ()=> {color = 'white'});
}



function makeGrid(num) {
    // creates num amount of columns, adds to etchGrid and stores in list gridColumns
    let gridColumns = [];
    for (let i = 0; i < num; i++) {
        let newColumn = document.createElement('div');
        newColumn.classList.add('column');
        gridColumns.push(newColumn);
        etchGrid.appendChild(newColumn);
    }
    // creates and adds num amount of divs to each column 
    gridColumns.forEach(column => {
        for (let i = 0; i < num; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('drawable');
            gridDrawSquares.push(gridSquare);
            column.appendChild(gridSquare);

            //gridSquare.innerText = 'x';
        }
        
    });
    
}

function clearGrid(parent) { // removes all children from parent
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// clears grid and resets to input size
slider.addEventListener('input', ()=> {
    gridSize = slider.value;
    clearGrid(etchGrid);
    makeGrid(gridSize);
    getColor();
    draw();
})
// resets grid background to white
clearButton.addEventListener('click', ()=>{
    clearGrid(etchGrid);
    makeGrid(gridSize);
    draw();
});

makeGrid(gridSize);
getColor();
draw();








      
    
            

       




