// Об'єкти мінімум
const auto = {
  producer: "VW",
  model: "Golf",
  year: 2015,
  averageSpeed: 80,
  fuelTank: 50,
  averageWaste: 5,
  drivers: ["Толік", "Микола", "Василь"],
  conclusion: function () {
    console.log(auto);
  },
  addDriver: () => {
    auto.drivers.push("Олекса");
    return auto.drivers[3];
  },
  refuel: function (tank) {
    if (tank < 2) {
      console.log(`Рівень пального: ${tank}л. Потрібно заправитися.`);
    } else {
      console.log(`Рівень пального: ${tank}л.`);
    }
  },
  check: function () {
    // Підрахунок часу
    let distance = prompt("Скільки кілометрів Ви б хотіли проїхати?");
    let necessaryTime = distance / auto.averageSpeed;
    let time = prompt("За який час Ви б хотіли доїхати?");

    if (time >= 4) {
      return +necessaryTime.toFixed(1) + 1;
    } else {
      return +necessaryTime.toFixed(1);
    }
  },
};

console.log(auto.conclusion()); // Виводить підсумок на екран автомобіля
console.log(auto.addDriver()); // Повертає ім'я додаткового водія
console.log(auto.refuel(30)); // Показує в консолі рівень пального
console.log(`Вам потрібно ${auto.check()}год, щоб проїхати дану відстань.`); // Повертає час, необхідний, щоб проїхати
