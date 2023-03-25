

//Holds all smaller drawable divs

const etchGrid = document.querySelector('.etch-grid');




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
            column.appendChild(gridSquare);
            gridSquare.innerText = 'x';
        }
        
    });
    
}

makeGrid(16)
