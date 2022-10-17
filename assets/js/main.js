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
let containerGrid = document.querySelector('.container');
console.log(containerGrid);

let cell = '<div class="cell"></div>';
console.log(cell);

let totalCells = 100;
console.log(totalCells);

let listCells = document.querySelectorAll('cell');
console.log(listCells);


//aggiungo le 100 in pagina
for (let i = 0; i < totalCells; i++) {
    containerGrid.innerHTML += cell;

}
console.log(containerGrid);

// generare una lista di numeri PROGRESSIVI da 1 a 100

for (let i = 1; i <= 100; i++) {
    
    console.log(i);
    
}

// aggiungere a "cell" i numeri progressivi da 1 a 100
