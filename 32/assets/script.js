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

let timeInRest = (timeInWay%4 == 0) ? (timeInWay/4 | 0) - 1: timeInWay/4| 0;

let timeTotal = distance / speed + timeInRest;

let fuelSpend = distance * fuel/100;

alert(`Загальний час в дорозі = ${timeTotal} годин. Вам необхідно ${fuelSpend} палива для подолання переданої відстані з середньою швидкістю`);



let date = new Date()

let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
}

function getYourTime(a, b, c) {
    console.log(`${a}:${b}:${c}`)
}

getYourTime(time.hours, time.minutes, time.seconds)

let changeTime = () => {
    let a = +prompt("Введіть кількість секунд на яку збільшьтся час"),
        b = +prompt("Введіть кількість хвилин на яку збільшьтся час"),
        c = +prompt("Введіть кількість годин на яку збільшьтся час");
    time.seconds += a;
    time.minutes += b;
    time.hours += c;

    if (time.seconds > 60) {
        time.minutes += Math.floor(time.seconds / 60);
        time.seconds = (time.seconds / 60 - Math.floor(time.seconds / 60)) * 60;
        time.seconds = time.seconds.toFixed()
    }

    if (time.minutes > 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes = (time.minutes / 60 - Math.floor(time.minutes / 60)) * 60;
        time.minutes = time.minutes.toFixed()
    }

    if (time.hours >= 24) {
        time.hours = (time.hours / 24 - Math.floor(time.hours / 24)) * 24;
        time.hours = time.hours.toFixed()
    }
    getYourTime(time.hours, time.minutes, time.seconds)
}

changeTime();