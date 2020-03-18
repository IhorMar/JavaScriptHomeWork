
let rangeOfNumber = 5;
let doubleOfRange = 1;
let counter = 3;
let prizeAccount = 0;
let prizeTriple = 1;
let totalPrize = 0;


// Start the game.

function startGame(){
  let gameStartQuestion = confirm("Do you want to play a game?");
  if (gameStartQuestion == false){
    console.log("You did not become a millionaire");
  } else {
    mainGame(rangeOfNumber,doubleOfRange,counter,prizeTriple,prizeAccount);
  }
}
startGame();

// main logik of game

function mainGame(maxNumber,doubleOfRange,counter,prizeTriple,prizeAccount){
  let possible1 = prizeAccount + 10 * prizeTriple;
  let possible2 = prizeAccount + 5 * prizeTriple;
  let possible3 = prizeAccount + 2 * prizeTriple;
  while (counter > 0){
        switch (counter){
        case 3:
          possible = possible1;
          break;
        case 2:
          possible = possible2;
          break;
        case 1:
          possible = possible3;
          break;
      }
        randomNumber = Math.floor (Math.random() * (maxNumber + 1));
        let userNumber = prompt(`Enter your number from 0 to ${maxNumber}.\nAttempts: ${counter}\nTotal prize: ${prizeAccount}$\nPossible prize on current attempt: ${possible}$`);
          if (userNumber < 0 || userNumber > maxNumber || isNaN(userNumber) || userNumber == "" ){
          alert("You enter incorrect number or it is not a number!!!");
        } else if (userNumber == randomNumber && counter == 3) {
            console.log("You guess a number. You win 10$");
            prizeAccount = possible1;
        } else if (userNumber == randomNumber && counter == 2) {
            console.log("You guess a number. You win 5$");
            prizeAccount = possible2;
        } else if (userNumber == randomNumber && counter == 1) {
            console.log("You guess a number. You win 2$");
            prizeAccount = possible3;
        } else if (userNumber === null){
            return;
          }
      counter--;
    }
    totalPrize = prizeAccount + totalPrize;
    continueGame(prizeAccount);
  }


// continue game again if you previously win

function continueGame(prizeAccount){

  if (prizeAccount > 0){

    prizeAccount = 0;
    userAnswer = confirm("Continue?");
    if (userAnswer == true){
      counter = 3;
      doubleOfRange = doubleOfRange * 2;
      prizeTriple = prizeTriple * 3;
      maxNumber = rangeOfNumber * doubleOfRange;
      mainGame(maxNumber,doubleOfRange,counter,prizeTriple,prizeAccount);

    } else {
      // totalPrize = prizeAccount + totalPrize;
      console.log(`Thank you for a game. Your prize is: ${totalPrize}$`)
    }
  } else {

    console.log(`Thank you for a game. Your prize is: ${totalPrize}$`)
  }


}
