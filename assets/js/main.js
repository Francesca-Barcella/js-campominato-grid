
alert('ciao, funziono!')

/******************************************************************* 
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

let listCells = document.getElementsByClassName('cell');
console.log(listCells);


//aggiungo le 100 in console
for (let i = 0; i < totalCells; i++) {
    containerGrid += cell;
}
console.log(containerGrid);

for (let i = 0; i < listCells.length; i++) {

    let choiceCell = listCells[i];

    choiceCell.addEventListener('click', function () {
        choiceCell.classList.add('blue');
    });

}