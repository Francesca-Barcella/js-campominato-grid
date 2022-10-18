/****************************************************************** 
TRACCIA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*******************************************************************/

/* 
 <div class="cell"></div>
*/

// collego il container del dom a js
// creo le variabili per aggiungere 100 celle con let/const e getElementsByClassName
const containerGrid = document.querySelector('.container');
console.log(containerGrid);

const buttonGenerate = document.querySelector('.button');
console.log(buttonGenerate);

let totalCells = 100;
console.log(totalCells);

let listCells = document.querySelectorAll('cell');
console.log(listCells);

/* 
PROMEMORIA PER FARE IL N° CELLE PER RIGA DINAMICO
let numberRowCells = Math.sqrt(totalCells);
console.log('n° celle per riga = ' + numberRowCells);
*/

// attivo l'eventlistener al button genera griglia

buttonGenerate.addEventListener('click', function () {
    console.log('hai cliccato il pulsante genera campo minato');
    
    //ciclo for per aggiungere le 100 celle con i numeri ordinati da 1 a 100
    for (let i = 1; i <= totalCells; i++) {
        const singleNumbers = [i];
        //console.log(singleNumbers);
            
        let cell = `<div class="cell">${singleNumbers}</div>`;
        //console.log(cell);
        
        containerGrid.innerHTML += cell;

             
        
        cell.addEventListener('click', function () {
            console.log('hai cliccato il pulsante genera campo minato');
        })

    }
    //console.log(containerGrid);

})




