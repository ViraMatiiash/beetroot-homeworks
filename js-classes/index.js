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
    let usedInk = this.ink - +string.replaceAll(' ', '').length / 2;
    if (usedInk > 5) {
      return `Your have ${usedInk}% ink yet.`;
    } else {
      return 'There is almost no ink in your marker. You need to fill it!';
    }
  }
}

const greenMarker = new Marker('green', 100);
console.log(greenMarker.inkAmount('Ich schreibe auf Deutsch.')); // Перевірка на к-ть чорнила
console.log(
  greenMarker.inkAmount(
    "Ich schreibe auf Deutsch, weil ich zu faul bin, um auf Englisch zu schreiben. Deswegen musst du den selber übersetzen oder in Google Translate hinschmeißen, um zu verstehen, dass ich nix Böses hier geschrieben habe. Los Geht's!!!"
  ) // Перевірка на відсутність чорнила
);

class newMarker extends Marker {
  constructor(color, ink) {
    super(color, ink);
  }

  fillInk(string) {
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

const orangeMarker = new newMarker('orange', 100);
console.log(orangeMarker.fillInk('Ich schreibe auf Deutsch wieder.'));
console.log(
  orangeMarker.fillInk(
    "Ich schreibe hier wieder auf Deutsch, weil ich zu faul bin, um auf Englisch zu schreiben. Deswegen musst du den selber übersetzen oder in Google Translate hinschmeißen, um zu verstehen, dass ich nix Böses hier geschrieben habe. Los Geht's!!!"
  )
);


// ! 2. Створити клас Person, де конструктор приймає 4 аргументи. Прописати метод, який покаже повне ім'я користувача. Створити метод, який буде вітати

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
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

const sharkBilly = new Shark("Billy", 3, "Alive and well");
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

const dogRichy = new Dog("Richy", 12, "Serving his master", "Eliza");
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
