// ! 26.04.2022

// Функція, що перевертає заданий стрінг
const solution = (str) => str.split('').reverse().join(''); 
console.log(solution('FAmily'));

// Функція, що перетворює binary у decimal
const binToDec = (bin) => parseInt(bin, 2);
console.log(binToDec("1001001"));

// Функція, що конвертує задане число у перевернутий масив цифр
const digitize = (n) => String(n).split('').map(Number).reverse();
console.log(digitize(123456));

// Функція, яка чистить заданий стрінг від цифр
const stringClean = (s) => s.replace(/[0-9]/g, '');
console.log(stringClean("Fami14ly95"));

// Функція, яка визначає, чи задане число ділиться на два наступних заданих числа
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0 ? true : false;
console.log(isDivideBy(12, 6, 2));

// Натан п'є 0.5л води на годину. Функція повертає заокруглену до меншого значення к-ть води у літрах, яку Натан випиває за вказаний час
const litres = (time) => Math.floor(time * 0.5);
console.log(litres(11.8));

// Якщо у стрінгу є 5, 0, 1, тоді функція замінює їх на 'S', 'O', 'I' відповідно
const correct = (string) => {
  return string.split('').map((char) => {
    return char === '5' ? 'S' : char === '0' ? 'O' : char === '1' ? 'I' : string;
  }).join('');
}
console.log(correct('505'));