const countElement = document.getElementById('count');
const message = document.getElementById('message');
const numbers = document.getElementById('numbers');

// **************FUNZIONE
function getRandomNumber (){
        const number = Math.floor(Math.random() * 100) + 1;
        return number;
}
// **************

const numberlist = [];

let randomNumber = getRandomNumber();

for (let i = 0; i < numberlist.length; i++){
    numberlist.push(randomNumber);
    console.log(numberlist);
}


let count = 31;

const interval = setInterval(() => {

    if (count === 0){
    
    }else{

        countElement.innerText = --count;
        message.innerText = 'Memorizza i numeri entro il tempo limite:'

    }


}, 1000)





// const lista = ['pane' , 'latte' , 'carne' , 'pesce' , 'acqua'];

// let spesa = ''

// // for (let i = 0; i < lista.length; i++){
// //     spesa += lista[i];
// // }

// let i = 0;
// while(i < lista.length){
//     spesa += lista[i];
//     i++
// }
// document.getElementById('spesa').innerHTML = spesa;
