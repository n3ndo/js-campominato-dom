function createCell(num, cells_row){
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num;
    square.style.width = `calc(100% / ${cells_row})`;
    square.style.height = square.style.width
    return square;
}

function createNewGame(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    let cells_numb = 100;
    let cells_row;

    cells_row = Math.sqrt(cells_numb);

    for(let i=1; i<=cells_numb; i++){
        let cell = createCell(i, cells_row);

        grid.appendChild(cell);
    }
}


const button = document.getElementById('play');
button.addEventListener("click", function(){
    createNewGame();
})