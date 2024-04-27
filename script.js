let slot = '';
let restartBtn = document.getElementById('restart-btn');
let menuBtn = document.getElementById('menu-btn');
let gameboard = document.getElementById('gameboard');
let playerTurn = 0;
let indicator = 1;
let onlinePlay = false;
let onlineOneArray = []
let onlineTwoArray = [];
let onlineTurn = "red;"
let playerOneName= document.querySelector('.player-one-name')
let playerTwoName = document.querySelector('.player-two-name')
let playerOneScore = 0;
let playerOneScoreContainer = document.getElementById('player-one-score');
let playerTwoScore = 0;
let playerTwoScoreContainer = document.getElementById('player-two-score');
let playerOneTurn = document.getElementById('player-one-turn');
let playerTwoTurn = document.getElementById('player-two-turn');
let menu = document.getElementById('background');
let animationOn = document.getElementById('animation-on');
let toggleEasy = document.getElementById('easy');
let toggleHard = document.getElementById('hard');
let difficultyHard = true;
let animation = true;
let flashIndicator = 1;
let flash = document.querySelector('.col-indicator');
let seahorse = document.querySelector('#seahore');
let fishOne = document.querySelector('#fish-one');
let fishTwo = document.querySelector('#fish-two');
let fishThree = document.querySelector('#fish-three');
let fishFour = document.querySelector('#fish-four');
let fishFive = document.querySelector('#fish-five');
let fishSix = document.querySelector('#fish-six');
let fishSeven = document.querySelector('#fish-seven');
let fishEight = document.querySelector('#fish-eight');
let fishNine = document.querySelector('#fish-nine');
let fishTen = document.querySelector('#fish-ten');
let fishEleven = document.querySelector('#fish-eleven');
let fishGroup = document.querySelector('#fish-group');
let rightFastPos = 500;
let rightSlowPos = 200;
let rightMedPos = 350;
let rightFastPosTwo = 0;
let rightMedPosTwo = 0;
let leftMedPos = 100;
let leftFastPos = 400;
let leftSlowPos = 700;
let leftMedPosTwo = 500;
let leftFastPosTwo = 0;
let leftPos = 0;
let rightPos = 0;
let fishGroupPos = 300;
setInterval(animateRight, 40);
setInterval(animateLeft, 40);

animationOn.addEventListener("input", toggleAnimation);

//******************** Toggle off/on background animation for performance optimization ***************//
function toggleAnimation() {
    if (animationOn.checked) {
        animation = true;
        console.log(animation)
    } else {
        animation = false;
        console.log(animation)
    }
}


toggleEasy.addEventListener("input", toggleDifficulty);
toggleHard.addEventListener("input", toggleDifficulty);

//******************** Toggle computer difficulty easy/hard *******************//
function toggleDifficulty() {
    if (toggleEasy.checked) {
        difficultyHard = false;
        console.log(difficultyHard);
    } else {
        difficultyHard = true;
        console.log(difficultyHard);
    }
}



/*************** Background Animation for fish moving right ********************/
function animateRight() {
    if (animationOn.checked && window.innerWidth > 650) {
        if (fishGroupPos >= window.innerWidth) {
            fishGroupPos = -100;
            fishGroupPos += 1.5;
            fishGroup.style.left = fishGroupPos + "px";
        } else {

            fishGroupPos += 1.5;
            fishGroup.style.left = fishGroupPos + "px";
        }

        if (rightFastPos >= window.innerWidth) {
            rightFastPos = -100;
            rightFastPos += 3;
            fishOne.style.left = rightFastPos + "px";


        } else {
            rightFastPos += 3;
            fishOne.style.left = rightFastPos + "px";

        };

        if (rightFastPosTwo >= window.innerWidth) {
            rightFastPosTwo = -100;
            rightFastPosTwo += 3;

            fishThree.style.left = rightFastPosTwo + "px";

        } else {
            rightFastPosTwo += 3;

            fishThree.style.left = rightFastPosTwo + "px";
        };

        if (rightMedPos >= window.innerWidth) {
            rightMedPos = -100;
            rightMedPos += 2;

            fishTwo.style.left = rightMedPos + "px";
        } else {
            rightMedPos += 2;

            fishTwo.style.left = rightMedPos + "px";
        };

        if (rightMedPosTwo >= window.innerWidth) {
            rightMedPosTwo = -100;
            rightMedPosTwo += 2;
            fishFour.style.left = rightMedPosTwo + "px";

        } else {
            rightMedPosTwo += 2;
            fishFour.style.left = rightMedPosTwo + "px";

        };

        if (rightSlowPos >= window.innerWidth) {
            rightSlowPos = -100;
            rightSlowPos++;
            fishFive.style.left = rightSlowPos + "px";

        } else {
            rightSlowPos++;
            fishFive.style.left = rightSlowPos + "px";

        };
    } else {
        animation = false;
    }

}

/*************** Background Animation for fish moving left ********************/
function animateLeft() {
    if (animationOn.checked && window.innerWidth > 650) {
        if (leftFastPos < -100) {
            leftFastPos = window.innerWidth;
            leftFastPos -= 3;
            fishSeven.style.left = leftFastPos + "px";

        } else {
            leftFastPos -= 3;
            fishSeven.style.left = leftFastPos + "px";

        };

        if (leftFastPosTwo < -100) {
            leftFastPosTwo = window.innerWidth;
            leftFastPosTwo -= 3;

            fishEight.style.left = leftFastPosTwo + "px";
        } else {
            leftFastPosTwo -= 3;

            fishEight.style.left = leftFastPosTwo + "px";
        };

        if (leftMedPos < -100) {
            leftMedPos = window.innerWidth;
            leftMedPos -= 2;
            fishNine.style.left = leftMedPos + "px";

        } else {
            leftMedPos -= 2;
            fishNine.style.left = leftMedPos + "px";

        };

        if (leftMedPosTwo < -100) {
            leftMedPosTwo = window.innerWidth;
            leftMedPosTwo -= 2;

            fishTen.style.left = leftMedPosTwo + "px";
        } else {
            leftMedPosTwo -= 2;

            fishTen.style.left = leftMedPosTwo + "px";
        };

        if (leftSlowPos < -100) {
            leftSlowPos = window.innerWidth;
            leftSlowPos--;
            fishEleven.style.left = leftSlowPos + "px";

        } else {
            leftSlowPos--;
            fishEleven.style.left = leftSlowPos + "px";

        };
    } else {
        animation = false;
    }

}



//***** Creating variables for column indicator including buttons, columns and arrow ****//
let menuContainer = document.getElementById('menu-container')
let winSound = document.getElementById('win-sound');
let shellSound = document.getElementById('shell-sound');
let bubbleSound = document.getElementById('bubble-sound');
let moveLeft = document.getElementById('arrow-left');
let moveRight = document.getElementById('arrow-right');
let colOne = document.getElementById('col-one');
let colTwo = document.getElementById('col-two');
let colThree = document.getElementById('col-three');
let colFour = document.getElementById('col-four');
let colFive = document.getElementById('col-five');
let colSix = document.getElementById('col-six');
let colSeven = document.getElementById('col-seven');
let computerBtn = document.getElementById('computer-btn');
let playerBtn = document.getElementById('player-btn');
//*let rulesBtn = document.getElementById('rules-btn');
//*let backBtn = document.getElementById('go-back-btn');
let openMenuButton = document.getElementById('menu-btn');
let closeMenuBtn = document.getElementById('close-menu-btn');
let playBtn = document.getElementById('play-btn');
let board = document.getElementById('gameboard');
let winner = document.getElementById('winning-statement');
let winningScreen = document.getElementById('winning-screen');
let activeComputer = false;
let gameWon = false;
let inidicatorArrowContainer = document.querySelector('.indicator-arrow-container')
let bottomNavContainer = document.querySelector('.bottom-nav-container')
let colIndicator =  document.querySelector('.col-indicator')
let playAgainBtn = document.getElementById('play-again-btn');


let gameboardArray = [];
let playerOneArray = [];
let playerTwoArray = [];
let computer = [];





/*********************************   Winning Screen Buttons, one closes the screen, the other statrs a new game  ***********************/
playAgainBtn.addEventListener("click", playAgain);


function playAgain() {
    winningScreen.classList.add("display-none");
        playerOneArray = [];
        playerTwoArray = [];
        playerTurn = 0;
        gameWon = false;
        for (let i = 0; i < 42; i++) {
            gameboardArray[i].classList.remove('red');
            gameboardArray[i].classList.remove('yellow');
            gameboardArray[i].classList.add('empty');
        };
    if (onlinePlay) {
        socket.emit("reset", true)
    }
    
};

//********************************** For loop to initiate the game board in the DOM *****************************//
function populateBoard() {
    gameboard.style.display = "flex";
    inidicatorArrowContainer.style.display = "flex";
    bottomNavContainer.style.display = "flex";
    colIndicator.style.display = "flex";
    menu.style.display = "none"
    for (let i = 0; i < 42; i++) {
        slot = document.createElement('div');
        slot.className = 'slot empty';
        gameboardArray.push(slot);
        gameboard.appendChild(gameboardArray[i]);
    };
}


//***************************** Functions to animate illustrations in HUD ****************************//




//******************* Event Listeners to all buttons in the HUD *******************//
moveLeft.addEventListener("click", arrowLeft);
moveRight.addEventListener("click", arrowRight);
restartBtn.addEventListener("click", restart);
computerBtn.addEventListener("click", function() {
    populateBoard()
    playComputer()
    changePlayerTurn()
} );
playerBtn.addEventListener("click", function() {
    populateBoard()
    playPerson()
    changePlayerTurn()
    
} );
//rulesBtn.addEventListener("click",showRules);
//backBtn.addEventListener("click",goBack);
openMenuButton.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
    menu.classList.remove('display-none')
};

//******* Function once vs computer button is pressed. All arrays, scores and gameboard reset ***********//
function playComputer() {
    bubbleSound.play();
    activeComputer = true;
    onlinePlay = false;
    playerOneArray = [];
    playerTwoArray = [];
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTurn = 0;
    menu.classList.add('display-none');
    playerOneScoreContainer.innerHTML = playerOneScore;
    playerTwoScoreContainer.innerHTML = playerTwoScore;
    for (let i = 0; i < 42; i++) {
        gameboardArray[i].classList.remove('red');
        gameboardArray[i].classList.remove('yellow');
        gameboardArray[i].classList.add('empty');
    };
};

//******* Function once vs player button is pressed. All arrays, scores and gameboard reset ***********//
function playPerson() {
    activeComputer = false;
    onlinePlay = false;
    bubbleSound.play();
    playerOneArray = [];
    playerTwoArray = [];
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTurn = 0;
    menu.classList.add('display-none');
    playerOneScoreContainer.innerHTML = playerOneScore;
    playerTwoScoreContainer.innerHTML = playerTwoScore;
    for (let i = 0; i < 42; i++) {
        gameboardArray[i].classList.remove('red');
        gameboardArray[i].classList.remove('yellow');
        gameboardArray[i].classList.add('empty');
    };
};

function playOnlinePerson() {
    onlineOneArray = []
    onlineTwoArray = []
    onlineTurn = 'red'
    activeComputer = false;
    onlinePlay = true;
    bubbleSound.play();
    playerOneArray = [];
    playerTwoArray = [];
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneTurn = 0;
    menu.classList.add('display-none');
    playerOneScoreContainer.innerHTML = playerOneScore;
    playerTwoScoreContainer.innerHTML = playerTwoScore;
    for (let i = 0; i < 42; i++) {
        gameboardArray[i].classList.remove('red');
        gameboardArray[i].classList.remove('yellow');
        gameboardArray[i].classList.add('empty');
    };
};




//************** Closes menu when X button is pressed ****************//
function closeMenu() {
    menu.classList.add('display-none');
};


//********** Event listener for 'Drop Shell' button. *************//
playBtn.addEventListener("click", () => {
    dropShell();
    setTimeout(checkWin, 50);
    setTimeout(computerTurn, 300);
    setTimeout(checkWin, 500);

});

//****************** Event Listener/function for keyboard uses Left/Right/Enter *******************//
addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        arrowLeft();
    } else if (event.keyCode === 39) {
        arrowRight();
    } else if (event.keyCode === 13) {
        dropShellSound();
        dropShell();
        setTimeout(checkWin, 50);
        setTimeout(computerTurn, 300);
        setTimeout(checkWin, 500);
    }
});

//******************* This function controls the turn indicator arrow, switching between left and right *******************//
function changePlayerTurn() {
    playerOneTurn = document.getElementById('player-one-turn');
    playerTwoTurn = document.getElementById('player-two-turn');
    if (playerTurn === 0) {
        playerTwoTurn.classList.add("display-none");
        playerOneTurn.classList.remove("display-none");

    } else if (playerTurn === 1) {
        playerOneTurn.classList.add("display-none");
        playerTwoTurn.classList.remove("display-none");
    };
};

//****************** Plays Sound Effect when dropping shell ******************//
function dropShellSound() {
    shellSound.play();
}
//****************** Function drops the shells/pieces into place *******************//
function dropShell() {
    if (!onlinePlay) {
        if (gameWon) {
            playerTurn += 0;
    
    
    
    
    
            //********* This can be shortened ********//
        } else if (playerTurn === 0) {          //**************************** Player One Drop Function ****************************//
            for (let i = 1; i <= 7; i++) {
                if (i === indicator) {
                    for (let j = i + 34; j >= 0; j -= 7) {
                        if (gameboardArray[j].classList.contains('empty')) {
                            gameboardArray[j].classList.add('taken');
                            gameboardArray[j].classList.add('red');
                            gameboardArray[j].classList.remove('empty');
                            playerOneArray.push(j);
                            playerTurn += 1;
                            break;
                        } else {
                            playerTurn += 0;
                        }
                    }
                }
            }
        } else if (playerTurn === 1) {        //**************************** Player Two Drop Function ****************************//
            for (let i = 1; i <= 7; i++) {
                if (i === indicator) {
                    for (let j = i + 34; j >= 0; j -= 7) {
                        if (gameboardArray[j].classList.contains('empty')) {
                            gameboardArray[j].classList.add('taken');
                            gameboardArray[j].classList.add('yellow');
                            gameboardArray[j].classList.remove('empty');
                            playerTwoArray.push(j);
                            playerTurn -= 1;
                            break;
                        } else {
                            playerTurn += 0;
                        }
                    }
                }
            }
        }
    } else if (onlineTurn == value) {
        let turn
        for (let i = 1; i <= 7; i++) {
            if (i === indicator) {
                for (let j = i + 34; j >= 0; j -= 7) {
                    if (gameboardArray[j].classList.contains('empty')) {
                        gameboardArray[j].classList.add('taken');
                        gameboardArray[j].classList.add(value);
                        gameboardArray[j].classList.remove('empty');
                        turn = j
                        socket.emit("playing", {value:value, id:turn, playerName: playerName})
                        console.log(playerOneArray)
                        break;
                    } else {
                        turn = 0;
                    }
                }
            }
        }
    }
    

    if (playerTurn === 0) {
        playerOneTurn = document.getElementById('player-one-turn');
        playerTwoTurn = document.getElementById('player-two-turn');
        playerTwoTurn.classList.add("display-none");
        playerOneTurn.classList.remove("display-none");
    } else if (playerTurn === 1) {
        playerOneTurn = document.getElementById('player-one-turn');
        playerTwoTurn = document.getElementById('player-two-turn');
        playerTwoTurn.classList.remove("display-none");
        playerOneTurn.classList.add("display-none");
    };
};

//************************ Function that makes the column indicator flash ********************//

setInterval(flashButton, 250);

function flashButton() {
    if (flashIndicator === 1) {
        flash.classList.add("hidden");
        flashIndicator--;
    } else {
        flash.classList.remove("hidden");
        flashIndicator++;
    }
};

//*********************** Function for right arrow button to change which column the player chooses ***********************//
function arrowRight() {
    if (indicator === 7) {
        indicator += 0;
    } else if (indicator === 6) {
        colSix.classList.add('hidden');
        colSeven.classList.remove('hidden');
        indicator += 1;
    } else if (indicator === 5) {
        colFive.classList.add('hidden');
        colSix.classList.remove('hidden');
        indicator += 1;
    } else if (indicator === 4) {
        colFour.classList.add('hidden');
        colFive.classList.remove('hidden');
        indicator += 1;
    } else if (indicator === 3) {
        colThree.classList.add('hidden');
        colFour.classList.remove('hidden');
        indicator += 1;
    } else if (indicator === 2) {
        colTwo.classList.add('hidden');
        colThree.classList.remove('hidden');
        indicator += 1;
    } else if (indicator === 1) {
        colOne.classList.add('hidden');
        colTwo.classList.remove('hidden');
        indicator += 1;
    }
};

//******************* Function for Left arrow button to change which column the player chooses **********************//
function arrowLeft() {
    if (indicator === 1) {
        indicator += 0;
    } else if (indicator === 2) {
        colOne.classList.remove('hidden');
        colTwo.classList.add('hidden');
        indicator -= 1;
    } else if (indicator === 3) {
        colThree.classList.add('hidden');
        colTwo.classList.remove('hidden');
        indicator -= 1;
    } else if (indicator === 4) {
        colFour.classList.add('hidden');
        colThree.classList.remove('hidden');
        indicator -= 1;
    } else if (indicator === 5) {
        colFive.classList.add('hidden');
        colFour.classList.remove('hidden');
        indicator -= 1;
    } else if (indicator === 6) {
        colSix.classList.add('hidden');
        colFive.classList.remove('hidden');
        indicator -= 1;
    } else if (indicator === 7) {
        colSeven.classList.add('hidden');
        colSix.classList.remove('hidden');
        indicator -= 1;
    }
};

//**************************** Complete list of possible winning arrays **************************//
let winningArray = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],

    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
    [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
    [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
    [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
    [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],

    [14, 22, 30, 38], [7, 15, 23, 32], [15, 23, 31, 39],
    [3, 11, 19, 27], [2, 10, 18, 26], [10, 18, 26, 34],
    [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
    [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],

    [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4],
    [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5],
    [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6],
    [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20]
];





//******************************* Computer Drop Functions ****************************//

function computerTurn() {
    if ((gameWon != true) && activeComputer) {
        //*************************** This section checks whether the copmuter has any winning lines that can win ************************//
        //******* If computer holds Two Spaces a gap then another space the computer will place a piece in the middle to win  *******////////
        //******** This checks rows with pieces on 1,2 and 4 in the row **********//
        if (activeComputer && playerTurn === 1) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 2].classList.contains('yellow') && gameboardArray[i - 3].classList.contains('yellow') && gameboardArray[i - 1].classList.contains('empty') && !gameboardArray[i + 6].classList.contains('empty')) {
                    gameboardArray[i - 1].classList.add('yellow')
                    gameboardArray[i - 1].classList.add('taken')
                    gameboardArray[i - 1].classList.remove('empty')
                    playerTwoArray.push(i - 1);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******** This checks rows with pieces on 1,3 and 4 in the row  ************//
        if (activeComputer && playerTurn === 1) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 1].classList.contains('yellow') && gameboardArray[i - 3].classList.contains('yellow') && gameboardArray[i - 2].classList.contains('empty') && !gameboardArray[i + 5].classList.contains('empty')) {
                    gameboardArray[i - 2].classList.add('yellow')
                    gameboardArray[i - 2].classList.add('taken')
                    gameboardArray[i - 2].classList.remove('empty')
                    playerTwoArray.push(i - 2);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //******* Checks Columns to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 7].classList.contains('yellow') && gameboardArray[i - 14].classList.contains('yellow') && gameboardArray[i - 21].classList.contains('empty')) {
                    gameboardArray[i - 21].classList.add('yellow')
                    gameboardArray[i - 21].classList.add('taken')
                    gameboardArray[i - 21].classList.remove('empty')
                    playerTwoArray.push(i - 21);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals up to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 6].classList.contains('yellow') && gameboardArray[i - 12].classList.contains('yellow') && gameboardArray[i - 18].classList.contains('empty') && !gameboardArray[i - 11].classList.contains('empty')) {
                    gameboardArray[i - 18].classList.add('yellow')
                    gameboardArray[i - 18].classList.add('taken')
                    gameboardArray[i - 18].classList.remove('empty')
                    playerTwoArray.push(i - 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };
        //******* Checks Diagonals Up in reverse to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 8].classList.contains('yellow') && gameboardArray[i - 16].classList.contains('yellow') && gameboardArray[i - 24].classList.contains('empty') && !gameboardArray[i - 17].classList.contains('empty')) {
                    gameboardArray[i - 24].classList.add('yellow')
                    gameboardArray[i - 24].classList.add('taken')
                    gameboardArray[i - 24].classList.remove('empty')
                    playerTwoArray.push(i - 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals Down to win Row 2 and up **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 0; i <= 10; i++) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 8].classList.contains('yellow') && gameboardArray[i + 16].classList.contains('yellow') && gameboardArray[i + 24].classList.contains('empty') && !gameboardArray[i + 31].classList.contains('empty')) {
                    gameboardArray[i + 24].classList.add('yellow')
                    gameboardArray[i + 24].classList.add('taken')
                    gameboardArray[i + 24].classList.remove('empty')
                    playerTwoArray.push(i + 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals Down in Bottom Row **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 14; i <= 17; i++) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 8].classList.contains('yellow') && gameboardArray[i + 16].classList.contains('yellow') && gameboardArray[i + 24].classList.contains('empty')) {
                    gameboardArray[i + 24].classList.add('yellow')
                    gameboardArray[i + 24].classList.add('taken')
                    gameboardArray[i + 24].classList.remove('empty')
                    playerTwoArray.push(i + 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };
        //******* Checks Diagonals Down in reverse to win Row 2 and up **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 3; i <= 10; i++) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 6].classList.contains('yellow') && gameboardArray[i + 12].classList.contains('yellow') && gameboardArray[i + 18].classList.contains('empty') && !gameboardArray[i + 25].classList.contains('empty')) {
                    gameboardArray[i + 18].classList.add('yellow')
                    gameboardArray[i + 18].classList.add('taken')
                    gameboardArray[i + 18].classList.remove('empty')
                    playerTwoArray.push(i + 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };
        //******* Checks Diagonals Down in reverse bottom row **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 17; i <= 20; i++) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 6].classList.contains('yellow') && gameboardArray[i + 12].classList.contains('yellow') && gameboardArray[i + 18].classList.contains('empty')) {
                    gameboardArray[i + 18].classList.add('yellow')
                    gameboardArray[i + 18].classList.add('taken')
                    gameboardArray[i + 18].classList.remove('empty')
                    playerTwoArray.push(i + 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals with pieces on 1, 2 and 4 for winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 6].classList.contains('yellow') && gameboardArray[i - 18].classList.contains('yellow') && gameboardArray[i - 12].classList.contains('empty') && !gameboardArray[i - 5].classList.contains('empty')) {
                    gameboardArray[i - 12].classList.add('yellow')
                    gameboardArray[i - 12].classList.add('taken')
                    gameboardArray[i - 12].classList.remove('empty')
                    playerTwoArray.push(i - 12);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals with pieces on 1, 3 and 4 for winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 12].classList.contains('yellow') && gameboardArray[i - 18].classList.contains('yellow') && gameboardArray[i - 6].classList.contains('empty') && !gameboardArray[i + 1].classList.contains('empty')) {
                    gameboardArray[i - 6].classList.add('yellow')
                    gameboardArray[i - 6].classList.add('taken')
                    gameboardArray[i - 6].classList.remove('empty')
                    playerTwoArray.push(i - 6);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //******* Checks Diagonals in reverse with pieces on 1, 2 and 4 for winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 8].classList.contains('yellow') && gameboardArray[i - 24].classList.contains('yellow') && gameboardArray[i - 16].classList.contains('empty') && gameboardArray[i - 9].classList.contains('taken')) {
                    gameboardArray[i - 16].classList.add('yellow')
                    gameboardArray[i - 16].classList.add('taken')
                    gameboardArray[i - 16].classList.remove('empty')
                    playerTwoArray.push(i - 16);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals in reverse with pieces on 1, 3 and 4 for winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 16].classList.contains('yellow') && gameboardArray[i - 24].classList.contains('yellow') && gameboardArray[i - 8].classList.contains('empty') && !gameboardArray[i - 1].classList.contains('empty')) {
                    gameboardArray[i - 8].classList.add('yellow')
                    gameboardArray[i - 8].classList.add('taken')
                    gameboardArray[i - 8].classList.remove('empty')
                    playerTwoArray.push(i - 8);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks bottom rows to right to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 35; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 1].classList.contains('yellow') && gameboardArray[i + 2].classList.contains('yellow') && gameboardArray[i + 3].classList.contains('empty')) {
                    gameboardArray[i + 3].classList.add('yellow')
                    gameboardArray[i + 3].classList.add('taken')
                    gameboardArray[i + 3].classList.remove('empty')
                    playerTwoArray.push(i + 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks bottom rows to left to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 38; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 1].classList.contains('yellow') && gameboardArray[i - 2].classList.contains('yellow') && gameboardArray[i - 3].classList.contains('empty')) {
                    gameboardArray[i - 3].classList.add('yellow')
                    gameboardArray[i - 3].classList.add('taken')
                    gameboardArray[i - 3].classList.remove('empty')
                    playerTwoArray.push(i - 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks All Other Rows to the right to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 31; i >= 0; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i + 1].classList.contains('yellow') && gameboardArray[i + 2].classList.contains('yellow') && gameboardArray[i + 3].classList.contains('empty') && !gameboardArray[i + 10].classList.contains('empty')) {
                    gameboardArray[i + 3].classList.add('yellow')
                    gameboardArray[i + 3].classList.add('taken')
                    gameboardArray[i + 3].classList.remove('empty')
                    playerTwoArray.push(i + 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks All Other Rows to the left to win **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('yellow') && gameboardArray[i - 1].classList.contains('yellow') && gameboardArray[i - 2].classList.contains('yellow') && gameboardArray[i - 3].classList.contains('empty') && !gameboardArray[i + 4].classList.contains('empty')) {
                    gameboardArray[i - 3].classList.add('yellow')
                    gameboardArray[i - 3].classList.add('taken')
                    gameboardArray[i - 3].classList.remove('empty')
                    playerTwoArray.push(i - 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //**************************** This section checks whether the player has a winning line that can be blocked **********************//
        //******* Checks Columns to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 7].classList.contains('red') && gameboardArray[i - 14].classList.contains('red') && gameboardArray[i - 21].classList.contains('empty')) {
                    gameboardArray[i - 21].classList.add('yellow')
                    gameboardArray[i - 21].classList.add('taken')
                    gameboardArray[i - 21].classList.remove('empty')
                    playerTwoArray.push(i - 21);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals up to block any winning lines **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 6].classList.contains('red') && gameboardArray[i - 12].classList.contains('red') && gameboardArray[i - 18].classList.contains('empty') && !gameboardArray[i - 11].classList.contains('empty')) {
                    gameboardArray[i - 18].classList.add('yellow')
                    gameboardArray[i - 18].classList.add('taken')
                    gameboardArray[i - 18].classList.remove('empty')
                    playerTwoArray.push(i - 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };
        //******* Checks Diagonals Up in reverse to block any winning lines **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 8].classList.contains('red') && gameboardArray[i - 16].classList.contains('red') && gameboardArray[i - 24].classList.contains('empty') && !gameboardArray[i - 17].classList.contains('empty')) {
                    gameboardArray[i - 24].classList.add('yellow')
                    gameboardArray[i - 24].classList.add('taken')
                    gameboardArray[i - 24].classList.remove('empty')
                    playerTwoArray.push(i - 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals Down to Left to block any winning lines Row 2 and up **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 3; i <= 13; i++) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 6].classList.contains('red') && gameboardArray[i + 12].classList.contains('red') && gameboardArray[i + 18].classList.contains('empty') && !gameboardArray[i + 25].classList.contains('empty')) {
                    gameboardArray[i + 18].classList.add('yellow')
                    gameboardArray[i + 18].classList.add('taken')
                    gameboardArray[i + 18].classList.remove('empty')
                    playerTwoArray.push(i + 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals Down to Left to block any winning lines Bottom Row **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 17; i <= 20; i++) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 6].classList.contains('red') && gameboardArray[i + 12].classList.contains('red') && gameboardArray[i + 18].classList.contains('empty')) {
                    gameboardArray[i + 18].classList.add('yellow')
                    gameboardArray[i + 18].classList.add('taken')
                    gameboardArray[i + 18].classList.remove('empty')
                    playerTwoArray.push(i + 18);
                    playerTurn -= 1;
                    break;
                }
            };
        };
        //******* Checks Diagonals Down to right to block any winning lines Row 2 and up **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 0; i <= 17; i++) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 8].classList.contains('red') && gameboardArray[i + 16].classList.contains('red') && gameboardArray[i + 24].classList.contains('empty') && !gameboardArray[i + 31].classList.contains('empty')) {
                    gameboardArray[i + 24].classList.add('yellow')
                    gameboardArray[i + 24].classList.add('taken')
                    gameboardArray[i + 24].classList.remove('empty')
                    playerTwoArray.push(i + 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals Down to right to block any winning lines Bottomn Row **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 14; i <= 17; i++) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 8].classList.contains('red') && gameboardArray[i + 16].classList.contains('red') && gameboardArray[i + 24].classList.contains('empty')) {
                    gameboardArray[i + 24].classList.add('yellow')
                    gameboardArray[i + 24].classList.add('taken')
                    gameboardArray[i + 24].classList.remove('empty')
                    playerTwoArray.push(i + 24);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //******* Checks bottom rows to right to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 35; i <= 38; i++) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 1].classList.contains('red') && gameboardArray[i + 2].classList.contains('red') && gameboardArray[i + 3].classList.contains('empty')) {
                    gameboardArray[i + 3].classList.add('yellow')
                    gameboardArray[i + 3].classList.add('taken')
                    gameboardArray[i + 3].classList.remove('empty')
                    playerTwoArray.push(i + 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks bottom rows to left to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 38; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 1].classList.contains('red') && gameboardArray[i - 2].classList.contains('red') && gameboardArray[i - 3].classList.contains('empty')) {
                    gameboardArray[i - 3].classList.add('yellow')
                    gameboardArray[i - 3].classList.add('taken')
                    gameboardArray[i - 3].classList.remove('empty')
                    playerTwoArray.push(i - 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks All Other Rows to the right to block any winning lines **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 31; i >= 0; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i + 1].classList.contains('red') && gameboardArray[i + 2].classList.contains('red') && gameboardArray[i + 3].classList.contains('empty') && !gameboardArray[i + 10].classList.contains('empty')) {
                    gameboardArray[i + 3].classList.add('yellow')
                    gameboardArray[i + 3].classList.add('taken')
                    gameboardArray[i + 3].classList.remove('empty')
                    playerTwoArray.push(i + 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks All Other Rows to the left to block any winning lines **////////
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 1].classList.contains('red') && gameboardArray[i - 2].classList.contains('red') && gameboardArray[i - 3].classList.contains('empty') && !gameboardArray[i + 4].classList.contains('empty')) {
                    gameboardArray[i - 3].classList.add('yellow')
                    gameboardArray[i - 3].classList.add('taken')
                    gameboardArray[i - 3].classList.remove('empty')
                    playerTwoArray.push(i - 3);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //**************** If there are no winning moves or blocking moves the following arrays are used ***********//
        //*********** First few moves are to break up the board so the player cannot win towards the start ******//
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            if (gameboardArray[38].classList.contains('empty')) {
                gameboardArray[38].classList.add('yellow')
                gameboardArray[38].classList.add('taken')
                gameboardArray[38].classList.remove('empty')
                playerTwoArray.push(38);
                playerTurn -= 1;
            } else if (gameboardArray[37].classList.contains('empty')) {
                gameboardArray[37].classList.add('yellow')
                gameboardArray[37].classList.add('taken')
                gameboardArray[37].classList.remove('empty')
                playerTwoArray.push(37);
                playerTurn -= 1;
            } else if (gameboardArray[39].classList.contains('empty')) {
                gameboardArray[39].classList.add('yellow')
                gameboardArray[39].classList.add('taken')
                gameboardArray[39].classList.remove('empty')
                playerTwoArray.push(39);
                playerTurn -= 1;
            } else if (gameboardArray[40].classList.contains('empty')) {
                gameboardArray[40].classList.add('yellow')
                gameboardArray[40].classList.add('taken')
                gameboardArray[40].classList.remove('empty')
                playerTwoArray.push(40);
                playerTurn -= 1;
            } else if (gameboardArray[36].classList.contains('empty')) {
                gameboardArray[36].classList.add('yellow')
                gameboardArray[36].classList.add('taken')
                gameboardArray[36].classList.remove('empty')
                playerTwoArray.push(36);
                playerTurn -= 1;
            } else {
                playerTurn += 0;
            }
        };



        //******* If player holds Two Spaces a gap then another space the computer will place a blocking piece in the middle **////////
        //******** This checks rows with pieces on 1,2 and 4 in the row
        if (activeComputer && playerTurn === 1) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 2].classList.contains('red') && gameboardArray[i - 3].classList.contains('red') && gameboardArray[i - 1].classList.contains('empty') && !gameboardArray[i + 6].classList.contains('empty')) {
                    gameboardArray[i - 1].classList.add('yellow')
                    gameboardArray[i - 1].classList.add('taken')
                    gameboardArray[i - 1].classList.remove('empty')
                    playerTwoArray.push(i - 1);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******** This checks rows with pieces on 1,3 and 4 in the row
        if (activeComputer && playerTurn === 1) {
            for (let i = 34; i >= 3; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 1].classList.contains('red') && gameboardArray[i - 3].classList.contains('red') && gameboardArray[i - 2].classList.contains('empty') && !gameboardArray[i + 5].classList.contains('empty')) {
                    gameboardArray[i - 2].classList.add('yellow')
                    gameboardArray[i - 2].classList.add('taken')
                    gameboardArray[i - 2].classList.remove('empty')
                    playerTwoArray.push(i - 2);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals with pieces on 1, 2 and 4 to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 6].classList.contains('red') && gameboardArray[i - 18].classList.contains('red') && gameboardArray[i - 12].classList.contains('empty') && !gameboardArray[i - 5].classList.contains('empty')) {
                    gameboardArray[i - 12].classList.add('yellow')
                    gameboardArray[i - 12].classList.add('taken')
                    gameboardArray[i - 12].classList.remove('empty')
                    playerTwoArray.push(i - 12);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals with pieces on 1, 3 and 4 to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 38; i >= 21; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 12].classList.contains('red') && gameboardArray[i - 18].classList.contains('red') && gameboardArray[i - 6].classList.contains('empty') && !gameboardArray[i + 1].classList.contains('empty')) {
                    gameboardArray[i - 6].classList.add('yellow')
                    gameboardArray[i - 6].classList.add('taken')
                    gameboardArray[i - 6].classList.remove('empty')
                    playerTwoArray.push(i - 6);
                    playerTurn -= 1;
                    break;
                }
            };
        };


        //******* Checks Diagonals in reverse with pieces on 1, 2 and 4 to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 8].classList.contains('red') && gameboardArray[i - 24].classList.contains('red') && gameboardArray[i - 16].classList.contains('empty') && gameboardArray[i - 9].classList.contains('taken')) {
                    gameboardArray[i - 16].classList.add('yellow')
                    gameboardArray[i - 16].classList.add('taken')
                    gameboardArray[i - 16].classList.remove('empty')
                    playerTwoArray.push(i - 16);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //******* Checks Diagonals in reverse with pieces on 1, 3 and 4 to block any winning lines **////////
        if (activeComputer && playerTurn === 1) {
            for (let i = 41; i >= 24; i--) {
                if (gameboardArray[i].classList.contains('red') && gameboardArray[i - 16].classList.contains('red') && gameboardArray[i - 24].classList.contains('red') && gameboardArray[i - 8].classList.contains('empty') && !gameboardArray[i - 1].classList.contains('empty')) {
                    gameboardArray[i - 8].classList.add('yellow')
                    gameboardArray[i - 8].classList.add('taken')
                    gameboardArray[i - 8].classList.remove('empty')
                    playerTwoArray.push(i - 8);
                    playerTurn -= 1;
                    break;
                }
            };
        };

        //*********** Later moves are to break up the second row ***************//
        if (activeComputer && playerTurn === 1 && difficultyHard) {
            if (gameboardArray[31].classList.contains('empty')) {
                gameboardArray[31].classList.add('yellow')
                gameboardArray[31].classList.add('taken')
                gameboardArray[31].classList.remove('empty')
                playerTwoArray.push(31);
                playerTurn -= 1;
            } else if (gameboardArray[32].classList.contains('empty')) {
                gameboardArray[32].classList.add('yellow')
                gameboardArray[32].classList.add('taken')
                gameboardArray[32].classList.remove('empty')
                playerTwoArray.push(32);
                playerTurn -= 1;
            } else if (gameboardArray[29].classList.contains('empty')) {
                gameboardArray[29].classList.add('yellow')
                gameboardArray[29].classList.add('taken')
                gameboardArray[29].classList.remove('empty')
                playerTwoArray.push(29);
                playerTurn -= 1;
            } else if (gameboardArray[33].classList.contains('empty')) {
                gameboardArray[33].classList.add('yellow')
                gameboardArray[33].classList.add('taken')
                gameboardArray[33].classList.remove('empty')
                playerTwoArray.push(33);
                playerTurn -= 1;
            } else if (gameboardArray[30].classList.contains('empty')) {
                gameboardArray[30].classList.add('yellow')
                gameboardArray[30].classList.add('taken')
                gameboardArray[30].classList.remove('empty')
                playerTwoArray.push(30);
                playerTurn -= 1;
            } else {
                playerTurn += 0;
            }
        };




        //************** Picks a random number between 1-7 that is then used to indicate which column the shell will drop ****************************// 
        if (activeComputer && playerTurn === 1) {
            randomMove = Math.floor(Math.random() * 7);
            for (let i = 0; i <= 6; i++) {
                if ((randomMove === i) && (gameboardArray[i].classList.contains('empty'))) {
                    for (let j = i + 35; j >= i; j -= 7) {
                        if (gameboardArray[j].classList.contains('empty')) {
                            gameboardArray[j].classList.add('taken');
                            gameboardArray[j].classList.add('yellow');
                            gameboardArray[j].classList.remove('empty');
                            playerTwoArray.push(j);
                            playerTurn -= 1;
                            break;
                        }
                    }
                }
            }
        };


        //************** This array comes into play once the columns start filling up ***********//
        if (playerTurn === 1) {
            for (let a = 41; a >= 0; a--) {
                if (gameboardArray[a].classList.contains('empty')) {
                    gameboardArray[a].classList.add('taken');
                    gameboardArray[a].classList.add('yellow');
                    gameboardArray[a].classList.remove('empty');
                    playerTwoArray.push(a);
                    playerTurn -= 1;
                    break;
                }
            }
        };





        if (playerTurn === 0) {
            playerOneTurn = document.getElementById('player-one-turn');
            playerTwoTurn = document.getElementById('player-two-turn');
            playerTwoTurn.classList.add("display-none");
            playerOneTurn.classList.remove("display-none");
            shellSound.play();
        } else {
            playerTurn += 0;
        }
    }
};



//***** Restart function. Wipes player scores back to 0. Clears board ******//
function restart() {
    playerOneArray = [];
    playerTwoArray = [];
    playerTurn = 0;
    gameWon = false;
    for (let i = 0; i < 42; i++) {
        gameboardArray[i].classList.remove('red');
        gameboardArray[i].classList.remove('yellow');
        gameboardArray[i].classList.add('empty');
    };
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreContainer.innerHTML = playerOneScore;
    playerTwoScoreContainer.innerHTML = playerTwoScore;
}


//************************************* This function is envoked after each move and detects whether any player has a winning array ****************//
function checkWin() {

    for (let i = 0; i < winningArray.length; i++) {
        if ((gameWon != true) && (winningArray[i].every(elem => playerOneArray.includes(elem)))) {
            winSound.play();
            playerOneScore += 1;
            playerOneScoreContainer.innerHTML = playerOneScore;
            gameWon = true;
            winner.innerHTML = "Player One Wins!";
            winningScreen.classList.remove('display-none');

        } else if ((gameWon != true) && (winningArray[i].every(elem => playerTwoArray.includes(elem)))) {
            winSound.play();
            playerTwoScore += 1;
            playerTwoScoreContainer.innerHTML = playerTwoScore;
            gameWon = true;
            console.log("Player Two Wins");
            winningScreen.classList.remove('display-none');

        } else {
            playerTurn += 0;

        }
    };

    if ((gameWon != true) && (playerTwoArray.length === 21)) {
        winSound.play();
        gameWon = true;
        console.log("It's A Draw");
        winner.innerHTML = "It's A Draw!";
        winningScreen.classList.remove('display-none');
    };
};

/*********************************   Playing Online ***********************/
let playerName;
const socket = io();
let value;

let cancelSearchBtn = document.getElementById("cancel-search-btn")
let onlineBtn = document.getElementById("online-btn")

let findGameContainer = document.querySelector('.find-game-container')
let homeMenuBtns = document.querySelector('.home-menu-btns')
let toggleOptions = document.getElementById('toggle-options')
let loadingAnimation = document.querySelector('.circle-container')

cancelSearchBtn.addEventListener("click", toggleSearch);
onlineBtn.addEventListener("click", toggleSearch);

function toggleSearch() {
    document.querySelector('.find-game-container').classList.toggle('display-none');
    document.querySelector('.home-menu-btns').classList.toggle('display-none');
    document.getElementById('toggle-options').style.opacity = '0';
}

document.getElementById("search-btn").addEventListener('click', function (event) {
    event.preventDefault();
    findGameContainer.classList.toggle('display-none');
    loadingAnimation.classList.toggle('display-none');
    playerName = document.getElementById("name").value;

    if (playerName == '' || playerName == null) {
        console.log('error');
    } else {
        socket.emit("find", { name: playerName });
        //document.getElementById("user").innerText = playerName;
    }
});

socket.on("find", (e) => {
    const allPlayersArray = e.allPlayers;
    populateBoard();
    playOnlinePerson();
    changePlayerTurn();
    let playerShell = document.querySelector('.player-one-score')
    let oppShell = document.querySelector('.player-two-score')
    
    const foundObj = allPlayersArray.find(obj => obj.p1.p1name === playerName || obj.p2.p2name === playerName);

    if (foundObj) {
        const oppName = foundObj.p1.p1name === playerName ? foundObj.p2.p2name : foundObj.p1.p1name;
        value = foundObj.p1.p1name === playerName ? foundObj.p1.p1value : foundObj.p2.p2value;

        playerOneName.innerText = playerName;
        playerTwoName.innerText = oppName;
        playerOneScore.innerHTML = foundObj.p1.p1score
        playerTwoScore.innerHTML = foundObj.p2.p2score

        if (value == 'yellow') {
            playerShell.classList.add('yellow-bg')
            oppShell.classList.add('red-bg')

        } else {
            playerShell.classList.add('red-bg')
            oppShell.classList.add('yellow-bg')
        }
    }


});

socket.on("playing", (e) => {
    const foundObj = e.allPlayers.find(obj => obj.p1 && obj.p1.p1name === playerName || obj.p2 && obj.p2.p2name === playerName);
    console.log(foundObj)
    if (foundObj) {
        const p1id = foundObj.p1 ? foundObj.p1.p1move : '';
        const p2id = foundObj.p2 ? foundObj.p2.p2move : '';

        if (p1id !== '') {
            
            gameboardArray[p1id].classList.add('taken', 'red');
            gameboardArray[p1id].classList.remove('empty');
        }

        if (p2id !== '') {
            gameboardArray[p2id].classList.add('taken', 'yellow');
            gameboardArray[p2id].classList.remove('empty');
        }

        if (foundObj.sum % 2 == 0) {
            onlineTurn = "yellow"
            console.log("yellow is Here")
        } else {
            
            onlineTurn = "red"
            console.log("red is Here")
        }
    } else {
        console.log("Player not found or moves not available");
    }
});

socket.on("winner", (e) => {
    winner.innerHTML = e.playerWin + " Wins!";
    winningScreen.classList.remove('display-none');
})


socket.on("error", (err) => {
    console.error("Socket error:", err);
});








