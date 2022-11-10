const gameBoard = (() => {
    const gameArray = ['x', 'o', 'x', 'x', 'o', 'x', 'x', 'o', 'x'];
    return { gameArray };
})()

const displayController = (() => {
    const playerOnePoints = 0;
    const playerTwoPoints = 0;
    return { playerOnePoints, playerTwoPoints }
})()

let activePlayer = 0;

const gameBoardBox = document.querySelectorAll('.gameBoardBox');
gameBoardBox.forEach((box) => {
    box.addEventListener('click', () => {
        boxLocation = parseInt(box.classList[1]);
        // console.log(boxLocation);
        //Add text to corresponding box
        if (activePlayer === 0 && box.textContent === '') {
            box.textContent = 'x';
            activePlayer = 1;
        } else if (activePlayer === 1 && box.textContent === '') {
            box.textContent = 'o';
            activePlayer = 0;
        }

        //Add value to array
        if (box.textContent !== '') {
            gameBoard.gameArray[boxLocation] = box.textContent;
        }
    })

})

const playerScore1 = document.querySelector('.playerScore1');
const playerScore2 = document.querySelector('.playerScore2');
playerScore1.textContent = displayController.playerOnePoints;
playerScore2.textContent = displayController.playerTwoPoints;

// TO DO LIST
// 1. Changing score depending on displayController objects
// 2. Win condition