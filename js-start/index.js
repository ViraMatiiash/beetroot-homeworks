// * Правильні назви змінних
// const MY_NAME = 'Vira Matiiash';
// const USER_NAME = 'Vira Matiiash';
// const DEV_NAME = 'Vira Matiiash';
// let userName = 'Vira Matiiash';
// let myName = 'Vira Matiiash';
// let devName = 'Vira Matiiash';

// ! Неправильні назви
// const 1996name = 'Vira Matiiash';
// let My-Name = 'Vira Matiiash';
// let moieImia = 'Vira Matiiash';
// let a = 'Vira Matiiash';
// let const = 'Vira Matiiash';

// Перевірка на 18 років
function sufficientAge() {
  let age = confirm("Артур, тобі є 18? Далі шок-контент.");
  age ? alert("Ну ок, поїхали :)") : alert("Ой нє, ще рано!!!");
}
sufficientAge();

// Запитати ім'я користувача і привітатися з ним
let userName = prompt("Введіть своє ім'я:");
alert(`Привіт, ${userName}!!!`);

// Визначити рік народження
const CURRENT_YEAR = 2022 - 1;
let userAge = prompt("Скільки тобі років?", 18);
alert(`Ви народилися у ${CURRENT_YEAR - userAge} році.`);

// Визначити периметр квадрата
let sideLength = prompt("Введіть довжину сторони квадрата:");
alert(`Периметр квадрата: ${4 * sideLength} см.`);

// Визначити довжину кола
let circleRadius = prompt("Введіть радіус кола:");
let circleArea = Math.pow(Math.PI * circleRadius, 2);
alert(`Площа круга дорівнює ~ ${circleArea.toFixed()} см.`);

// Відстань між містами
let distance = prompt("Введіть відстань між містами у кілометрах:");
let time = prompt(
  "Введіть кількість годин, за яку Ви хотіли б дістатися від одного міста до іншого:"
);
let speed = distance / time;
alert(
  `Щоб проїхати вказану відстань за даний час Вам потрібно рухатися зі швидкістю ${speed.toFixed()} км/год.`
);

// Конвертор валют
const CURRENCY = 0.85;
let dollarAmount = prompt(
  "Введіть кількість доларів, які б Ви хотіли поміняти в євро:"
);
alert(`Ви отримаєте приблизно ${(dollarAmount * CURRENCY).toFixed()} євро.`);

// Пасхалка
alert("А тепер бонус :)");
