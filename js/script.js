const countElement = document.getElementById('count');
const message = document.getElementById('message');
const numbersElement = document.getElementById('numbers');

// **************FUNZIONE
function getRandomNumber (){
        const number = parseInt(Math.floor(Math.random() * 100) + 1);
        return number;
}
// **************

// lista numeri casuali
let numbers = [];

for (let i = 0; i < 5; i++) {
  let number = getRandomNumber();
  numbers.push(number);
}

// dichiaro i secondi del countdown;
let count = 30;

// stampo in pagina
numbersElement.innerText = numbers;
message.innerText = 'Memorizza i numeri entro il tempo limite:'

// LOGICA
const interval = setInterval(() => {
    if (count === 0){

            clearInterval(interval);
            numbersElement.classList.add('d-none');
            message.classList.add('d-none');
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    let number = parseInt(prompt("Inserisci un numero:"));
                    if (number === numbers[i]){
                        
                    }else{
                        alert('Numero sbagliato:' + ' ' + 'Hai perso!');
                    }
                  }
            },1000)
    }else {
        countElement.innerText = --count;
    }
}, 1000)
