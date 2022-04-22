// * Функції
// Функція, що повертає кількість своїх аргументів
const args = (arg1, arg2, arg3, arg4) => args.length;
console.log(args(5, 4, 3, 2));

// Функція, що приймає 2 числа
const numberShow = (num1, num2) => {
  return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
};
console.log(numberShow(4, 4));

// Функція, що обчислює факторіал переданого числа
const factorialize = (num) => {
  return num < 0 ? -1 : num === 0 ? 1 : num * factorialize(num - 1);
};
console.log(factorialize(4));


// Функція, яка перетворює три числа в одне
const numbers = (num1, num2, num3) => {
  const numToString = "" + num1 + num2 + num3; // Додаємо спочатку порожній стрінг
  const stringToNum = +numToString; // Перетворюємо стрінг назад на число
  return stringToNum;
};
console.log(numbers(2, 3, 4));

// Функція обчислення площі прямокутника
const rectSquare = (num1, num2) => {
  // if (num1 && num2) {
  //   const rect = num1 * num2;
  //   return `Площа прямокутника дорівнює ${rect}см.`;
  // } else if (num1) {
  //   const square = num1 ** 2;
  //   return `Площа квадрата дорівнює ${square}см.`;
  // }

  return num1 && num2
    ? `Площа прямокутника дорівнює ${num1 * num2}см.`
    : `Площа квадрата дорівнює ${num1 ** 2}см.`;
};
console.log(rectSquare(4, 5));

// Функція, що повертає ідеальне число


function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    return true;
  } else {
    return false;
  }
}
console.log(perfectNumber(28));


// Функція, яка має мінімальне і максимальне число і виводить з діапазону тільки ідеальні числа
// ! Ця функція недописана, бо ще не додумалась, як то зробити :)

// let arr = [];
// function isPerfect(min, max) {
//   for (let i = min; i < max; i++) {
// // arr[i] = arr[i - 1] + perfectNumber(i);
//     if (perfectNumber() > min && perfectNumber() < max) {
//       return perfectNumber();
//     }
//   }
// };

// console.log(isPerfect(1, 29));

