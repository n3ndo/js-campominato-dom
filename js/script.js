function generateRandomNum(arrayBombs){
    let checkNum = false;
    let randomInt;

    while(!checkNum){
        randomInt = Math.floor(Math.random() * 100) + 1;

        if(!arrayBombs.includes(randomInt)){
            checkNum = true;
        }
    }

    return randomInt;
}

function bombList(arrayBombs){
    let bombs = [];

    for(let i=1; i<=16; i++){
        let bomb_num = generateRandomNum(bombs);
        bombs.push(bomb_num);
    }

    return bombs;
}

function createCell(num, cells_row){
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num;
    square.style.width = `calc(100% / ${cells_row})`;
    square.style.height = square.style.width;

    return square;
}

function createNewGame(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const numOfBombs = 16;
    let cells_numb = 100;
    let cells_row;
    const bombs = bombList(numOfBombs, cells_numb);


    cells_row = Math.sqrt(cells_numb);

    for(let i=1; i<=cells_numb; i++){
        let cell = createCell(i, cells_row);

        cell.addEventListener('click', function(){
            this.classList.add("safe");
            if(!bombs.includes(i)){
                this.classList.add("safe");
    
            }
            else{
                this.classList.add("boom");
            }
        })

        grid.appendChild(cell);
    }
    console.log(bombs);

}


const button = document.getElementById('play');
button.addEventListener("click", function(){
    createNewGame();
})