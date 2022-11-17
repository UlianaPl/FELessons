let car = {
  make: "Mazda",
  model: 3,
  year: 2007,
  middleSpeed: 100,
  engineSize: 2.2,
  OilSpend: 10,
  driver: "Uliana",   
}

console.log(car)

while (true) {
  let driver = prompt("Enter name", "")
  
  if(driver != "Uliana") break

  console.log(driver)
}

let customer = {}
Object.assign(customer, car)
customer.name = "Petro"
console.log(customer, car)

let distance = prompt("Введіть відстань");
let speed = prompt("Введіть середню швидкість");
let fuel = prompt("Введіть розхід палива при середній швидкості на 100 км");

let timeInWay = distance/speed;

let timeInRest = (timeInWay%4 == 0)? (timeInWay/4 | 0) - 1: timeInWay/4| 0;

let timeTotal = distance / speed + timeInRest;

let fuelSpend = distance * fuel/100;

alert(`Загальний час в дорозі = ${timeTotal} годин. Вам необхідно ${fuelSpend} палива для подолання переданої відстані з середньою швидкістю`);



let d;

d = new Date();

console.log(d);

alert(d)

let count = prompt("Скільки секунд ви б хотіли додати до поточного часу");


