

const guess = document.querySelectorAll('.square');
//random number same length as squares length
let battleshipNumber = Math.floor(Math.random() * 9);
console.log(battleshipNumber)

// for loop to run length of squares array
for (let i = 0; i < guess.length; i++) {
    guess[i].addEventListener('click', () => {
     //check if index is the same as random battleship number
        if (i === battleshipNumber) {
         // add class to change color if hit or miss
            guess[i].classList.add('ifHit');
            message.textContent = 'You Sank My Battleship';
        } else {
            guess[i].classList.add('ifMiss');
            message.textContent = 'You Missed, Try Again';
        }
    });
}

//reset game back to original, remove class names that change color, set message to blank
function resetGame() {
 battleshipNumber = Math.floor(Math.random() * 9);
 for (let i = 0; i < guess.length; i++) {
     guess[i].classList.remove('ifHit', 'ifMiss');
 }
 message.textContent = '';
}

document.getElementById('restart').addEventListener('click', resetGame);













