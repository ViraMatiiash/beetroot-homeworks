// // Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// // Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// // Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// // Створення списку (не) придбаних продуктів.

// const shoppingList = [
//   {
//     name: 'Хліб',
//     number: 2,
//     bought: true,
//     price: 20,
//     sum: () => shoppingList.number * shoppingList.price,
//   },

//   {
//     name: 'Молоко',
//     number: 1,
//     bought: false,
//     price: 32,
//     sum: () => shoppingList.number * shoppingList.price,
//   },

//   {
//     name: 'Мілка',
//     number: 3,
//     bought: true,
//     price: 94,
//     sum: () => shoppingList.number * shoppingList.price,
//   },

//   {
//     name: 'Масло',
//     number: 2,
//     bought: false,
//     price: 55,
//     sum: () => shoppingList.number * shoppingList.price,
//   },
// ];

// const boughtThings = shoppingList.map((thing) => {
//   if (thing.bought !== null) {
//   return thing.bought;
//   }
// });
// console.log(boughtThings);

// JSON
// const testObj = {
//   name: 'Vira',
//   age: 25
// };


// console.log(testObj);


// const testObjToString = JSON.stringify(testObj);
// console.log(testObjToString); // перетворює об'єкт весь у стрінг. Це джейсон-формат. Це для того, щоб перетворити назад у об'єкт. Дані з бекенду приходять у JSON.

// console.log(JSON.parse(testObjToString)); // назад перетворити у об'єкт

// const data = JSON.parse(testObjToString);


// // application - local storage - тут може зберігатися тільки стрінг. Session storage - всі дані видаляються, коли ми перезавантажуємо сторінку.

// localStorage
// sessionStorage // Ці методи є тільки у браузерах
// localStorage.clear() // видалить все з локал сторедж
//  // створюємо змінну тест із значенням 'hello'.
// const test = {
//   some: 1
// }

// setTimeout(() => {
// localStorage.setItem('test', 'Hello');
// }, 2000)
// localStorage.getItem('test');



// localStorage.setItem('products', JSON.stringify([]));
// const data = JSON.parse(localStorage.getItem('products'));
// if (data && data.length) {
//   console.log((data));
// }

// localStorage.setItem('products', JSON.stringify([{ name: 'some' }]));




// let timer,
//   timerTime = JSON.parse(localStorage.getItem('timer')) || 0;
// const editTimer = () => {
//   if (timer) {
//     clearInterval();
//     timer = null;
//   } else {
//     timer = setInterval(() => {
//       timerTime += 1;
//       localStorage.setItem('timer', timerTime);
//       document.getElementById('js-timer-time').innerText = timerTime;
//     }, 1000)
//   }
// }

// document.getElementById('js-timer-button').addEventListener('click', editTimer)


// // JSON допомагає перетворити складний тип даних на стрінг і навпаки. Інакшого виходу немає, буде баг.




// // heroku



// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.

const shopingList = [
  {
    name: 'bread',
    number: 2,
    price: 30,
    sum: function () {
      return this.number * this.price;
    },
    bought: false,
  },
  {
    name: 'butter',
    number: 1,
    price: 45,
    sum: function () {
      return this.number * this.price;
    },
    bought: true,
  },
  {
    name: 'tomato',
    number: 4,
    price: 18,
    sum: function () {
      return this.number * this.price;
    },
    bought: false,
  },
  {
    name: 'chocolate',
    number: 10,
    price: 10,
    sum: function () {
      return this.number * this.price;
    },
    bought: true,
  },
];

// shopingList
//   .sort(function (a, b) {
//     return a.bought - b.bought;
//   })
//   .forEach((el) => {
//     console.log(el.name);
//   });

const buyProduct = (name) => {
  if (name === shopingList.name) {
    shopingList.forEach((el) => {
      el.name;
      console.log(name);
    });
    return 'There is no such element';
  }
};

buyProduct('sdasd');
