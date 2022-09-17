const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("kick");
const statusTitle = document.getElementById("status");
const attempt = document.getElementById("attempt");
const result = document.getElementById("result");
const btnRestart = document.getElementById("btn-restart");
btnRestart.addEventListener("click", restartGame);

const guessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function(){
        return Math.round(Math.random() * this.max)
    },
    showButtonRestart: function(){
        btnRestart.style.display = 'flex';
    },
    clearInput: function(){
        inputValue.value = '';
    },
    updateAttempt: function(attempt, value){
        attempt.innerHTML = `Tentativa: ${value}`;
    },
    correctAnswear: function(){
        this.showButtonRestart();
        statusTitle.innerHTML = "Parabéns, você acertou 👻!";
        statusTitle.classList.remove("incorrect-answear");
        statusTitle.classList.add("status-correct");

        result.classList.remove("result-box-default");
        result.classList.add("result-correct-answear");
        
        this.clearInput();
    },
    incorrectAnswear: function(message){
        statusTitle.innerHTML = message;
        statusTitle.classList.add("incorrect-answear");

        this.clearInput();
    }
};

const numberDraw = guessNumber.numberDraw();

function handleSubmit(e){
    e.preventDefault();

    const kick = inputValue.value;
    if(!kick){
        alert("Digite algum valor!");
        return;
    }

    guessNumber.updateAttempt(attempt, ++guessNumber.attemptsNumber);
    if(kick == numberDraw){
        guessNumber.correctAnswear();
    } else if(kick > numberDraw){
        guessNumber.incorrectAnswear("O número é menor");   
    } else{
        guessNumber.incorrectAnswear("O número é maior");
    }
};

function restartGame(){
    document.location.reload(true);
}