// ! 26.04.2022

// 1. Функція, що перевертає заданий стрінг
const solution = (str) => str.split('').reverse().join('');
console.log(solution('Family'));

// 2. Функція, що перетворює binary у decimal
const binToDec = (bin) => parseInt(bin, 2);
console.log(binToDec('1001001'));

// 3. Функція, що конвертує задане число у перевернутий масив цифр
const digitize = (n) => String(n).split('').map(Number).reverse();
console.log(digitize(123456));

// 4. Функція, яка чистить заданий стрінг від цифр
const regExNumbers = /[0-9]/g;
const stringClean = (s) => s.replace(regExNumbers, '');
console.log(stringClean('Fami14ly95'));

// 5. Функція, яка визначає, чи задане число ділиться на два наступних заданих числа
const isDivideBy = (number, a, b) =>
  number % a === 0 && number % b === 0 ? true : false;
console.log(isDivideBy(12, 6, 5));

// 6. Натан п'є 0.5л води на годину. Функція повертає заокруглену до меншого значення к-ть води у літрах, яку Натан випиває за вказаний час
const litres = (time) => Math.floor(time * 0.5);
console.log(litres(11.8));

// 7. Якщо у стрінгу є 5, 0, 1, тоді функція замінює їх на 'S', 'O', 'I' відповідно
const correct = (string) => {
  return string
    .split('')
    .map((char) => {
      return char === '5'
        ? 'S'
        : char === '0'
        ? 'O'
        : char === '1'
        ? 'I'
        : string;
    })
    .join('');
};
console.log(correct('505'));

// 8. Функція бере за аргумент масив із стрінгів, розділених комами. На виході має бути масив символів, розділених пробілами. Якщо масив складається з пустого стрінга, дорівнює 2 і менше символів, тоді повертає null.
const array = (arr) => arr.split(',').slice(1, -1).join('') || null;
console.log(array(''));

// 9. Функція, яка повертає n-не парне число. Аргументом виступає номер парного числа, якщо рахувати від нуля.
const nthEven = (n) => n * 2 - 2;
console.log(nthEven(6));

// 10. Функція, яка повторює заданий стрінг задану к-ть разів.
const repeatStr = (n, s) => s.repeat(n);
console.log(repeatStr(6, 'let'));

// 11. Функція, що перетворює стрінг у число, якщо це можливо
const stringToNumber = (str) =>
  /[A-Za-z]/.test(str) ? "This string can't be converted to a number!" : +str;
console.log(stringToNumber('11.9afd'));

// 12. Функція, яка визначає, чи вказане число є парним, чи не парним (слід вказувати цілі числа :) )
const evenOrOdd = (input) => input % 2 === 0 ? 'It\'s an even number!' : 'It\'s an odd number!';
console.log(evenOrOdd(22));
console.log(evenOrOdd(3));
console.log(evenOrOdd(66));

// 13. Функція, яка завжди повертає число 5. Не можна використовувати жоден з наступних символів: 0123456789*+-/
const unusualFive = () => 'fuuck'.length;
console.log(unusualFive());

// 14. До зоопарку прибули нові тварини. Оглядач зоопарку занепокоєний тим, що, можливо, у тварин немає правильних хвостів. Щоб допомогти їм, ви повинні переконатися, що другий аргумент (хвіст) збігається з останньою літерою першого аргументу (тіло) - інакше хвіст не поміститься!
const correctTail = function (body, tail) {
  let sub = body.substr(body.length - tail.length);
  return sub === tail ? true : false;
};
console.log(correctTail('Rhino', 'o'));

// 15. Функція, яка приймає аргументом номер місяця у році (напр. 4 - квітень) і показує, скільки днів є у ньому.
const howManydays = (month) => {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 28;
  }
  return days;
};
console.log(howManydays(4));
console.log(howManydays(10));
console.log(howManydays(''));

// ! 27.04.2022

// 16. Функція повертає стрінг із значеннями об'єктів. Аргументом виступає об'єкт
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal({ name: 'dog', legs: 4, color: 'white' }));
console.log(animal({ name: 'cock', legs: 2, color: 'red' }));
console.log(animal({ name: 'rabbit', legs: 4, color: 'gray' }));

// 17. Функція, яка вираховує число, яке ділиться на вказаний дільник і є меншим або дорівнює вказаній межі.
const maxMultiple = (divisor, bound) => bound - (bound % divisor);
console.log(maxMultiple(2, 7));
console.log(maxMultiple(10, 50));
console.log(maxMultiple(7, 17));
console.log(maxMultiple(37, 200));

// 18. Функція, що перетворює rgb на hex.
const colorOf = (r, g, b) => `#${toHex(r) + toHex(g) + toHex(b)}`;

const toHex = (n) => {
  let result = n.toString(16);
  return result.length === 1 ? '0' + result : result;
}
console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));

// 19. Функція перше ділить вказаний стрінг на слова, потім кожне слово на символи, потім об'єднує ці символи назад у слова з конкретним заданим сепаратором між символами.
function splitAndMerge(string, separator) {
  let words = string.split(' ');
  console.log(words);
  let char = string.split('');
  console.log(char);
  return char.join(separator);
}
console.log(splitAndMerge('My name is John', ' '));
console.log(splitAndMerge('My name is John', '-'));
console.log(splitAndMerge('Hello World!', '.'));
console.log(splitAndMerge('Hello World!', ','));