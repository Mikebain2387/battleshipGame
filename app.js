const guess = document.querySelectorAll('.battleship .square');
console.log(guess)
const message = document.getElementsByClassName('message');


const rando = Math.floor(Math.random(0) * guess.length);
console.log(rando)



guess.addEventListener('click', choose);


// create
//ifHit correct num
//ifMiss incorrect num


function choose(){

 for(i=0; i<guess.length; i++){
  let myChoice = guess[i];
  if(rando == myChoice){
   message.innerText = ("You Sank My Battleship");
   
  }
console.log(myChoice)
}

}
choose()