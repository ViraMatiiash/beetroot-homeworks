// ! 1. Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  inkAmount(string) {
    console.log(`Your text is ${this.color}`);
    return this.ink - +string.replaceAll(' ', '').length / 2 > 5
      ? `Your have ${this.ink}% ink yet.`
      : 'There is almost no ink in your marker. You need to fill it!';
  }
}

const greenMarker = new Marker('green', 100);
console.log(greenMarker.inkAmount('Ich schreibe auf Deutsch.')); // Перевірка на к-ть чорнила
console.log(
  greenMarker.inkAmount(
    "Ich schreibe auf Deutsch, weil ich zu faul bin, um auf Englisch zu schreiben. Deswegen musst du den selber übersetzen oder in Google Translate hinschmeißen, um zu verstehen, dass ich nix Böses hier geschrieben habe. Los Geht's!!!"
  ) // Перевірка на відсутність чорнила
);

class FillMarker extends Marker {
  constructor(color, ink) {
    super(color, ink);
  }

  fillInk(string) {
    super.inkAmount;
    console.log(`Your text is ${this.color}`);
    let usedInk = this.ink - +string.replaceAll(' ', '').length / 2;
    if (usedInk > 5) {
      return `Your have ${usedInk}% ink yet.`;
    } else {
      return `As your marker was almost empty I filled it for you. Now you have again ${(usedInk =
        usedInk + (this.ink - usedInk))}% ink.`;
    }
  }
}

const orangeMarker = new FillMarker('orange', 100);
console.log(orangeMarker.fillInk('Ich schreibe auf Deutsch wieder.'));
console.log(
  orangeMarker.fillInk(
    "Ich schreibe hier wieder auf Deutsch, weil ich zu faul bin, um auf Englisch zu schreiben. Deswegen musst du den selber übersetzen oder in Google Translate hinschmeißen, um zu verstehen, dass ich nix Böses hier geschrieben habe. Los Geht's!!!"
  )
);

// ! 2. Створити клас Person, де конструктор приймає 4 аргументи. Прописати метод, який покаже повне ім'я користувача. Створити метод, який буде вітати

class Person {
  constructor(args) {
    this.firstName = args.firstName || 'John';
    this.lastName = args.lastName || 'Doe';
    this.age = args.age || 0;
    this.gender = args.gender || 'Male';
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// Перевірка на дефолтні значення
let user1 = new Person().age;
console.log(user1);
user1 = new Person().firstName;
console.log(user1);
user1 = new Person().lastName;
console.log(user1);
user1 = new Person().gender;
console.log(user1);
// Проста перевірка на задані параметри конструктора

user1 = new Person('Jane', 'Miller', 25, 'Female');
console.log(user1);
// Перевірка на метод greetExtraTerrestrials
console.log(user1.greetExtraTerrestrials('Martians'));

// ! 3. Екстенди з класу першого порядку
// * Клас Animals
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// * Клас Shark

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

const sharkBilly = new Shark('Billy', 3, 'Alive and well');
console.log(sharkBilly);
console.log(sharkBilly.introduce());

// * Клас Cat

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

const catSpitsy = new Cat('Spitsy', 6, 'sleeping');
console.log(catSpitsy);
console.log(catSpitsy.introduce());

// * Клас Dog

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

const dogRichy = new Dog('Richy', 12, 'Serving his master', 'Eliza');
console.log(dogRichy);
console.log(dogRichy.introduce());

// ! 4. Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get circleRadius() {
    return `Circle radius is: ${this.radius}`;
  }

  set circleRadius(circleRadius) {
    this.radius = circleRadius;
  }

  get circleDiameter() {
    return `Circle diameter is: ${this.radius * 2}`;
  }

  circleSquare() {
    return Math.round(Math.pow(Math.PI * this.radius, 2));
  }

  circleLength() {
    return Math.round(2 * Math.PI * this.radius);
  }
}
const circle = new Circle(5);
console.log(circle.circleRadius); // З допомогою геттера дістаємо значення
circle.circleRadius = 7; // З допомогою сеттера переназначаємо радіус
console.log(circle.circleRadius);
console.log(circle.circleSquare()); // викликаємо метод, який обчислює площу круга
console.log(circle.circleLength()); // викликаємо метод, який обчислює довжину кола

// ! 5. Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class EmpTable {
  constructor(params) {
    this.employeeList = params.employeeList || [];
  }

  getHTML() {
    const table = document.createElement('table');

    table.border = 3;
    table.borderColor = '#000000';
    const thead = document.createElement('thead');
    const th1 = document.createElement('th');
    th1.innerText = "Ім'я";
    const th2 = document.createElement('th');
    th2.innerText = 'Призвіще';
    const th3 = document.createElement('th');
    th3.innerText = 'Зарплата';
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    table.appendChild(thead);
    this.employeeList.forEach((employee) => {
      const tr = document.createElement('tr');
      Object.keys(employee).forEach((key) => {
        const td = document.createElement('td');
        td.innerText = employee[key];
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    return table;
  }

  generateItem() {}
}
const employeeList = [
  { name: 'John', lastName: 'Barker', salary: 1000 },
  { name: 'Mike', lastName: 'Miller', salary: 1500 },
  { name: 'Annie', lastName: 'Lang', salary: 1250 },
];

console.log(employeeList);
const test = new EmpTable({ employeeList });
console.log(test.getHTML());

document.getElementById('js-table').appendChild(test.getHTML());

// ! 6. Заекстендити класи для Адама і Єви із Human, а в класі God передати масив об'єктів.
class God {
  static create() {
    return [Adam, Eve];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

const Adam = new Man('Adam');

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}
const Eve = new Woman('Eve');
console.log(God.create());
