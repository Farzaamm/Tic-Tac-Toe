
const cover = document.createElement('div')
document.getElementById('container').appendChild(cover)
cover.setAttribute('class', 'cover')

const playButton = document.createElement('button')
cover.appendChild(playButton)
playButton.textContent = 'Play'
playButton.setAttribute('class', 'play-button')


const Player =  (sign) => {
    return sign
};

const playerX = Player('X')
const playerO = Player('O')
let currentPlayer = playerX

let gameboard = [
    '','','',
    '','','',
    '','',''
];

const childRemover = (parent) => {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}


const render = () => {
    for (let i in gameboard){
        let square = document.createElement('div')
        square.setAttribute('class', 'square')
        document.querySelector('.board').appendChild(square)
        square.textContent = gameboard[i]
    }
}

render();


const switchPlayer = () => {
    if (currentPlayer === playerO){
        currentPlayer = playerX
    }else{
        currentPlayer = playerO
    }
};

// switchPlayer()
// console.log(currentPlayer)

const reset = () => {
    childRemover(document.querySelector('.board'))
    gameboard = [
        '','','',
        '','','',
        '','',''
    ]
}

const play = () => {
    reset()
    render()
    let boxes = document.querySelectorAll('.square')
    for (let i = 0; i < 9; i++){
        boxes[i].addEventListener('click', () => {
            if(gameboard[i] === ''){
                gameboard[i] = currentPlayer
                boxes[i].textContent = currentPlayer
                checkWinner()
                switchPlayer()
                // console.log(gameboard)
            }
        })
    };
}

const congratulations = document.createElement('div')
document.getElementById('container').appendChild(congratulations)
congratulations.setAttribute('class', 'congratulations');

const congratulateWinner = () => {
    congratulations.style.display = 'flex';
    congratulations.textContent = `${currentPlayer} won!`;
}


const checkWinner = () => {
    if(gameboard.includes('')){
        if((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') 
        || (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') 
        || (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X')
        || (gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X')
        || (gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X')
        || (gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X')
        || (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X')
        || (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')){
            congratulateWinner()
        }else if((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') 
        || (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') 
        || (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O')
        || (gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O')
        || (gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O')
        || (gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O')
        || (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O')
        || (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')){
            congratulateWinner()
        }
    }else{
        congratulations.style.display = 'flex';
        congratulations.textContent = `It's a draw. Try again!`;
    }
};

document.getElementById('restart-btn').addEventListener('click', () => {
    currentPlayer = playerX;
    document.querySelector('.congratulations').style.display = 'none';
    play();
})

playButton.addEventListener('click', () => {
    cover.style.display = 'none';
    play()
})




