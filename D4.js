/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (base, altezza) {
  return base * altezza;
};

console.log("Area Rettangolo:", area(3, 15));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log("CrazySum:", crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1, num2 = 19) {
  if (num2 > 19) {
    return Math.abs((num1 - num2) * 3);
  } else {
    return Math.abs(num1 - num2);
  }
};
console.log(crazyDiff(32, 16));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (num) {
  if (num >= 20 && num <= 100) {
    return true;
  } else if (num === 400) {
    return true;
  } else {
    return `Il numero non è compreso tra 20 e 100 e non è nemmeno uguale a 400`;
  }
};
console.log(boundary(20));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (
  Stringa = "Neque porro quisquam est qui dolorem ipsum EPICODE"
) {
  if (Stringa.indexOf("EPICODE") === 0) {
    return Stringa;
  } else if (Stringa.indexOf("EPICODE") === -1) {
    return `EPICODE ${Stringa}`;
  } else {
    Stringa = Stringa.replace("EPICODE", "");
    return `EPICODE ${Stringa}`;
  }
};
console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return `${num} è un multiplo di 3 o di 7`;
  } else {
    return `${num} NON è un multpilo di 3 o di 7`;
  }
};
console.log(check3and7(31));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (Stringa = "EPICODE") {
  Stringa = Stringa.split("");
  Stringa = Stringa.reverse();
  Stringa = Stringa.join("");
  return Stringa;
};
console.log("Stringa Invertita:", reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (
  Stringa = "Neque porro quisquam est qui dolorem ipsum"
) {
  Stringa = Stringa.split(" ");
  Stringa.splice(0, 1);
  Stringa.pop();
  Stringa = Stringa.join(" ");
  return Stringa;
};
console.log(cutString());
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (num) {
  array = [];
  for (let i = 0; i < num; i++) {
    array.push(Math.round(Math.random() * 10));
  }
  return array;
};

console.log(giveMeRandom(5));

array = ["stringa1", "bstringa2"];
let c = 1;
// for (let i = 0; i <= array.length; i++) {
//   array = array[i][0].toUpperCase();
// }
console.log(array[c][0].toUpperCase());
