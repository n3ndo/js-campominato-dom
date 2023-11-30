function createCell(num){
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num;

    return square;
}

function createNewGame(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    for(let i=1; i<=100; i++){
        let cell = createCell(i);

        grid.appendChild(cell);
    }
}


const button = document.getElementById('play');
button.addEventListener("click", function(){
    createNewGame();
})