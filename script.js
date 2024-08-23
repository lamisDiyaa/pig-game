const score1El=document.getElementById("score--1")
const score0El=document.getElementById("score--0")
const dice=document.querySelector(".dice")
const newBtn=document.querySelector(".btn--new")
const rollBtn=document.querySelector(".btn--roll")
const holdBtn=document.querySelector(".btn--hold")
const playerScore0=document.getElementById("current--0")
const playerScore1=document.getElementById("current--1")
const playerOne=document.querySelector(".player--0")
const playerTwo=document.querySelector(".player--1")
const firstName=JSON.parse(localStorage.getItem('first-name'))
const secondName=JSON.parse(localStorage.getItem('second-name'))
const playerOneName=document.querySelector("#name--0")
const playertwoName=document.querySelector("#name--1")

let cuurentScore,activePlayer,playingGame,playersTotalScore


// to set the name of players
playerOneName.textContent=firstName
playertwoName.textContent=secondName


function initialValues(){

 
    cuurentScore=0
    activePlayer=0
    playingGame=true
    playersTotalScore=[0,0]

    score0El.textContent=0
    score1El.textContent=0
    playerScore0.textContent=0
    playerScore1.textContent=0

    playerOne.classList.add("player--active")
    playerTwo.classList.remove("player--active")
    document.querySelector(`.player--0`).classList.remove("player--winner")
    document.querySelector(`.player--1`).classList.remove("player--winner")

}
initialValues()

// function to switch players
function switchPlayer(){
        cuurentScore=0
        document.getElementById(`current--${activePlayer}`).textContent=cuurentScore
        activePlayer= activePlayer===0? 1:0
        playerOne.classList.toggle("player--active")
        playerTwo.classList.toggle("player--active")
}



// function when players start the game
function rollDice() {
   

    if(playingGame === true){
        dice.classList.remove("hidden")
        dice.classList.add('rolling');
        let randomNum=Math.trunc( Math.random()*6)+1
        dice.src=`./imgs/dice-${randomNum}.png`
        dice.addEventListener('animationend', () => {
            dice.classList.remove('rolling');
        }, { once: true });
    
        if(randomNum !== 1){
            cuurentScore+=randomNum
            document.getElementById(`current--${activePlayer}`).textContent=cuurentScore
            console.log(randomNum)
        }else{
            switchPlayer()
        }

    }

    // Remove the class after the animation ends to allow re-triggering
  
}

rollBtn.addEventListener('click', rollDice);


// function when player want to save his score
holdBtn.addEventListener("click",function(){
    playersTotalScore[activePlayer]+=cuurentScore
    document.getElementById(`score--${activePlayer}`).textContent=playersTotalScore[activePlayer]
    if(playersTotalScore[activePlayer]<20){
        switchPlayer()
    }else{
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`#name--${activePlayer}`).classList.add("name")
        playingGame=false
        dice.classList.add("hidden")
        spreadHearts();
    }
})

// functions to show hearts when player win
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function spreadHearts() {
    for (let i = 0; i < 80; i++) {
        setTimeout(createHeart, i * 100);
    }
}


newBtn.addEventListener("click",initialValues)












