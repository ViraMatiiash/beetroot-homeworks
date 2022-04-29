// 1. Функція, що рухає елементи масиву на к-ть вказаних кроків у вказаному напрямку.
function loopArr(numberArray, direction, steps) {
  if (direction === 'left') {
    let leftSplicer = numberArray.concat(numberArray.splice(0, steps));
    return leftSplicer;
  } else if (direction === 'right') {
    let rightSplicer = numberArray.splice(-steps, steps).concat(numberArray);
    return rightSplicer;
  } else if (direction === 'middle') {
    let middleSplicer = numberArray.splice(steps, steps).concat(numberArray);
    return middleSplicer;
  }
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'middle', 2));
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 3));
console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 1));
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 4));

// 2. Цикл, який розділяє парні та непарні вказані числа у два різні масиви.
function pickIt(numberArray) {
  let odd = [],
    even = [];
  for (i = 0; i < numberArray.length; i++) {
    numberArray[i] % 2 === 0 ? even.push(numberArray[i]) : odd.push(numberArray[i]);
  }
  return [odd, even];
}

console.log(pickIt([1, 2, 3]));
console.log(pickIt([1, 2]));
console.log(pickIt([10, 20, 30]));
console.log(pickIt([11, 21, 31]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));

// * Д/з по циклах: мінімум - задачка №1

let age;
do {
  age = +prompt('вкажи свій вік');
  console.log(age);
} while (isNaN(age));

const userAge = () => {

    if (age >= 0 && age <= 11) {
      alert('ти дитина');
    } else if (age >= 12 && age <= 17) {
      alert('ти тінейджер - підліток');
    } else if (age >= 18 && age <= 59) {
      alert('ти ще не старий, але вже скоро');
    } else if (age >= 60 && age < 160) {
      alert('то всьо');
    } else {
      alert('тебе не існуэ');
    }
};

userAge();

// * Мінімум - задачка №2

let input;
do {
  input = +prompt('Type a number from 0 to 9');
} while (Math.sign(input) === -1 || isNaN(input) || input > 9);

  let symbol = '';
  switch (input) {
    case 0:
      symbol = ')';
      break;
    case 1:
      symbol = '!';
      break;
    case 2:
      symbol = '@';
      break;
    case 3:
      symbol = '#';
      break;
    case 4:
      symbol = '$';
      break;
    case 5:
      symbol = '%';
      break;
    case 6:
      symbol = '^';
      break;
    case 7:
      symbol = '&';
      break;
    case 8:
      symbol = '*';
      break;
    case 9:
      symbol = '(';
      break;
  }

console.log(symbol);

// * Мінімум - задачка №3

let firstUserInput;
let secondUserInput;

do {
  firstUserInput = +prompt('Type the first number');
} while (isNaN(firstUserInput) || firstUserInput < 0);

do {
  secondUserInput = +prompt('Type the second number');
} while (isNaN(secondUserInput) || secondUserInput < 0);

const calculateSum = () => {
  let sum = 0;
  for (let i = firstUserInput; i <= secondUserInput; i++) {
    sum += i;
  }
  return sum;
};
console.log(calculateSum());

// TODO Мінімум - задачка №4 - не буде того >:(

// TODO Норма - задачка №1

// * Норма - задачка №2

let price;
do {
  price = +prompt('Введіть ціну покупки:');
} while (isNaN(price));

const purchase = () =>
  price < 1 ?
    'Больной?'
    : price < 200
    ? 'Знижки не буде!'
    : price >= 200 && price < 300
    ? `Ціна Вашої прокупки із врахуванням знижки: ${(
        price -
        price * 0.03
      ).toFixed()}грн.`
    : price >= 300 && price < 500
    ? `Ціна Вашої прокупки із врахуванням знижки: ${(
        price -
        price * 0.05
      ).toFixed()}грн.`
    : `Ура! Максимальна знижка! Ціна Вашої прокупки із врахуванням знижки: ${(
        price -
        price * 0.07
      ).toFixed()}грн.`;

console.log(purchase());

// TODO Норма - задачка №3

// * Норма - задачка №4

const show = () => {
let days = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
  'Неділя',
];
for (let i = 0; i <= days.length; i++) {
  let userAnswer = confirm('Хочеш побачити наступний день?');
  if (!userAnswer) {
    alert('А дарма!');
    break;
  }
  if (i === days.length) {
    alert('Тиждень закінчився! Починаємо спочатку!!!');
    show();
  } else {
    alert(days[i]);
  }
  }
}
show();

// ! Не задача, а параша якась. Максимум - задачка №1 (перероблена трохи)

// let userGuess = +prompt(
//   'Загадай число від 0 до 100, а я вгадаю, яке ти загадав :)'
// );
// console.log(userGuess);

// const guess = function () {
//   let randomNum = (Math.random() * 100).toFixed();

//   do {
//     alert(`Ти загадав не ${randomNum}? Йой, зара всьо буде.`);
//     guess();
//   } while (randomNum !== userGuess);
//     alert(`Я вгадала, твоє число - ${randomNum}`);
//   }
// guess();

// * Максимум - задачка №2

let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiply = (multiplyNumber) => {
  if (typeof multiplyNumber === 'number' && !isNaN(multiplyNumber) && multiplyNumber > 0) {
      return table.forEach((item) => {
        console.log(item * multiplyNumber);
      });
  }
  alert('Don\'t do that!');
};

// multiply(1);
// multiply(2);
// multiply(3);
multiply(4);
multiply(-11);
// multiply(9);
// multiply(10);

// * Максимум - задачка №3 (перероблена - показує просто сьогоднішню дату та час)


const dateToday = () => {
  const today = new Date();
  const date = `Todays date is: ${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()}. Time now is: ${today.toLocaleTimeString()}`;
  return date;
};

console.log(dateToday());
