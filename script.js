// Per tutti gli esercizi avremo: const array = [1, 2, 3, 4, 5, 6, 7, 8];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumbers = [10, 1, 2, 5, 6];

// Consegna
// forEach
// Eseguire console.log() di ogni elemento di array
const logItems = (item) => {
  console.log(`Item: ${item}`);
};
numbers.forEach(logItems);

// Consegna
// filter
// Tenere dentro l'array solo i numeri pari.
// risultato: [2,4,6,8]
const oddNumbers = (el) => {
  return el % 2 === 0;
};
console.log(
  "L'array filtrato che contiene solo i numeri pari:",
  numbers.filter(oddNumbers)
);

// Consegna
// Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], , usare utility come Array.includes oppure Array.indexOf.
// risultato: [1,2,5,6]
const numbersInCommon = (el) => {
  if (numbers.includes(el)) {
    return el;
  }
};

console.log(
  "Ecco l'array dei numeri in comune:",
  newNumbers.filter(numbersInCommon)
);

// Consegna
// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index.
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

// CON FOR EACH
const logNumberWithDelay = () => {
  let timer = 0;

  numbers.forEach((element, index) => {
    setTimeout(() => {
      console.log(
        `Dopo ${index} secondi stampo in console:`,
        numbers[element - 1]
      );
    }, timer);

    timer = timer + 1000;
  });
};

logNumberWithDelay();

// ALTERNATIVA CON FOR 'CLASSICO'

// const logNumberInSecond = () => {
//   let timer = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     setTimeout(() => {
//       console.log(`Dopo ${i} secondi stampo in console:`, numbers[i]);
//     }, timer);

//     timer = timer + 1000;
//   }
// };

// logNumberInSecond();
