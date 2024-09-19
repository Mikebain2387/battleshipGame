

const guess = document.querySelectorAll('.square');
//random number same length as squares length
let battleshipNumber = Math.floor(Math.random(0) * guess.length);
console.log(battleshipNumber)

// for loop to run length of squares array
for (let i = 0; i < guess.length; i++) {
    guess[i].addEventListener('click', () => {
     //check if index is the same as random battleship number
        if (i === battleshipNumber) {
         // add class to change color if hit 
            guess[i].classList.add('ifHit');
            message.textContent = 'You Sank My Battleship';
//confetti
            const duration = 3 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
          
          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }
          
          const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
          
            if (timeLeft <= 0) {
              return clearInterval(interval);
            }
          
            const particleCount = 50 * (timeLeft / duration);
          
            // since particles fall down, start a bit higher than random
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
              })
            );
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
              })
            );
          }, 100);

// end of confetti

        } 
        //add class to change color if missed
        else {
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













