/*let userName = prompt("What is your name?")
alert(`Hello ${userName}`)

console.log(userName)

let userYear = prompt("When were you born?")
const mainYear = 2022
userAge = mainYear - userYear
alert(`You are ${userAge}`)

console.log(userYear, mainYear, userAge)

let userLength = prompt("What is the square's side length?")
squarePerimeter = userLength * 4
alert(`The perimeter of the square is ${squarePerimeter}`)

console.log(squarePerimeter, userLength)

let circleRadius = prompt("What is the circle's radius?")
circleArea = 3.14 * (circleRadius**2)
alert(`The area of the circle is ${circleArea}`)

console.log(circleRadius, circleArea)

let cityDistance = prompt("What is the distance between Lviv and Kyiv?")
tripDuration = prompt("How many hours do you need to drive from Lviv to Kyiv?")
carSpeed  = cityDistance / tripDuration
alert(`Your speed should be ${carSpeed} km per one hour to get to Kyiv in time`)

console.log(cityDistance, tripDuration, carSpeed)

let dollarCount = prompt("How many dollars do you want to exchange for euros?")
const exchangeRate = 1
euroCount = dollarCount * exchangeRate
alert(`You wiil get ${euroCount} euros`)

console.log(exchangeRate, dollarCount, euroCount)

    
let number1 = 0.1,
    number2 = 0.2;
//console.log((number1 * 10 + number2 * 10) / 10)
console.log((number1 + number2).toFixed(1))

let item1 = '1',
    item2 = 2;
console.log(item1 + item2)

/*let flashdriveSize = prompt("What is your flash drive size?")
    oneFile = 820
    howMany = (flashdriveSize / oneFile).toFixed(2)
alert(`Your flash drive has ${howMany} files, 820 Mb each`)
      
console.log(flashdriveSize, oneFile, howMany)*/

/*let howMuch = prompt("How much money do you have in your wallet?")
oneChocolate = 50
confirm("One chocolate costs 50 UAH")
howMany = (howMuch / oneChocolate).toFixed(1)
alert(`You can buy ${howMany} chocolates`)
      
console.log(howMuch, oneChocolate, howMany)*/

/*let countName = prompt("Please name a three-digit number")
countName = [...countName].reverse().join("");
 
alert(`Here is your three-digit number backwards - ${countName}`)
      
console.log(countName)*/

/*let howMany = prompt("How much money do you want to deposit with a rate of 5% per year?")
    howLong = 2
    sumPercent = ((howMany * 5 /100) / 12 * howLong).toFixed(2)
alert(`The amount of accrued interest on the deposit for 2 months is ${sumPercent}`)
      
console.log(sumPercent)

console.log(2 && 0 && 3)

console.log(2 || 0 || 3)

console.log(2 && 0 || 3)

let userAge = prompt("What is your age?");
if (userAge < 11) {
    alert("You are a child")
} else if (userAge < 18) {
    alert("You are a teenager")
} else if (userAge < 60) {
    alert("You are an adult")
} else if (userAge >= 60) {
    alert("You are a pensioner")
} else {
    alert("Invalid data!")
}

console.log(userAge)

let userSymbol = prompt("Choose the number from 0 to 9");
if (userSymbol = 0) {
    alert("You get )")
} else if (userSymbol = 1) {
    alert("You get !")
} else if (userSymbol = 2) {
    alert("You get @")
} else if (userSymbol = 3) {
    alert("You get #")
} else if (userSymbol = 4) {
    alert("You get $")
} else if (userSymbol = 5) {
    alert("You get %")
} else if (userSymbol = 6) {
    alert("You get ^")
} else if (userSymbol = 7) {
    alert("You get &")
} else if (userSymbol = 8) {
    alert("You get *")
} else if (userSymbol = 9) {
    alert("You get (")
} else {
    alert("Invalid data!")
}

console.log(userSymbol)
let a = prompt("Введіть початок діапазону","")
let n = prompt("Введіть кінець діапазону","")
let sum = 0;
 
while(a < n) {
 
       a++;
       sum+=a;    
    }
 
alert(sum)
console.log(sum)

let a = prompt("Enter the starting number of the range","")
    b = prompt("Specify the end of the range number", "")


let n = +prompt('Введіть число');
 
for (let i = 2; i * 2 <= n; i++) {
    if (n % i == 0) {
        alert(`Ділителі цього числа: ${i}`);
    }
}

let number = +prompt('Введіть число');
let i = 1;
while(i < number){
i++;
if( number % i == 0 && i !==number){
alert(`Ділителі цього числа: ${i}`);
console.log(i);
}
}


alert('Введіть 2 числа, щоб знайти НСД')
let numb1 = prompt('Введіть перше число');
let numb2 = prompt('Введіть друге число');
let numb3;


calc(numb1, numb2)
alert('НСД чисел ' + numb1 + ' і ' + numb2 + ' буде: ' + numb3)

function calc(a, b) {
  let c;
  while (a != b) {
    if (a > b) {
      a = a - b;

    } else
    if (a < b) {
      c = a;
      a = b;
      b = c;
    }

  }
  return numb3 = a
}

function myResult(str) {
    return str == str.split('').reverse().join('');
}
 
 
let str = prompt("Введіть п'ятирозрядне число,щоб визначити,чи є воно паліндромом:");
 
alert(myResult(str));

let sum = prompt("Яка сума покупки?")
    
if (sum>200 && sum< 300) {
    let discount = sum * 0.03;
    alert(`Ваша знижка становить: ${discount}`);
} else if (sum>300 && sum< 500) {
    let discount = sum * 0.05;
    alert(`Ваша знижка становить: ${discount}`);
} else if (500 <= sum) {
    let discount = sum * 0.07
    alert(`Ваша знижка становить: ${discount}`);
}


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let currDay = 0;
while (confirm(`${days[currDay]}. Do you want to see what day is the next day of the week?`)) {
  currDay = (currDay + 1) % days.length;


let oneRow = '';
function multiply() {
	for (var i = 1; i < 11; i++) {
		for (var j = 1; j < 11; j++) {
			oneRow  += (j*i) + " ";       
		}
    console.log(i + " x");
    console.log(oneRow);
		oneRow = '';
	} 
}

multiply(); 


function isNull(value) {
  return value == null;
}

function isEven(num) {
  return num % 2 === 0;
}
isEven();  
isEven(); 

function someName() {
  console.log('Викликаємо функцію someName!');
}
someName();

class Hello {
  constructor(name) {
    this.name = name;
  }
  getMessage(message) {
    return this.name + message;
  }
}
const hello = new Hello('Привiт');
hello.getMessage(' світ!')

const absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
}
absValue(-10);  
absValue(5); 

function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value);  
console.log(g.next().value);

const numberA = 'numberA', numberB = 'numberB';
const sumFunction = new Function(numberA, numberB, 
   'return numberA + numberB'
);
sumFunction(10, 15)

function sum() {
  let sum = 0; 
  for (let i = 0, length = arguments.length; i < length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  console.log(sum);
}

sum();

function byOrder(a, b) {
    let result = null
    
    if (a.order > b.order) {
        result = 1
    }
    
    if (a.order < b.order) {
        result = -1
    }
    
    if (a.order == b.order) {
        result = 0
    }
    
    return result
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

let x1 = 5
let x2 = 10
let y1 = 5
let y2 = 10
let rectangleArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log(rectangleArea);

let length = prompt("Enter a whole number for the length of your rectangle.");
        let width = prompt("Enter a whole number for the width of your rectangle.");
        function area(length, width) {
            return length * width;
        }
        alert(('The area of your rectangle is ' + area(length, width)))

let one = '1', two = '4', three = '9';
console.log(one + two + three)

const inputNumber = prompt("Введіть число,якщо хочете дізнатися,чи воно досконале","");
function isPerfectNumber(inputNumber) {
  let sum = 0;
  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
      sum += i;
    }
  }
  if (sum == inputNumber) {
      return true;      
  }
    return false;    
}
console.log(isPerfectNumber("") ? "a perfect number" : "not a perfect number"
);

let a = prompt("Введіть початок діапазону","")
let b = prompt("Введіть кінець діапазону","")
function getPerfect(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    sum = 0;
    for (let n = 1; n <= i/2; n++) {
      if (i % n === 0) sum += n;
    }
    if (i === sum) result.push(i);
  }
    return result;
    
}
 
console.log(getPerfect());

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


let shopList = [
  new Item('Banana', 2, 'No', 20),
  new Item('Orange', 4, 'Yes', 30),
  new Item('Bread', 1, 'Yes', 40),
  new Item('Joghurt', 2, 'Yes', 50),
]

function shopItem(name, amount, inCart, price) {
  {
    this.name = name;
    this.amount = amount;
    this.inCart = inCart;
    this.price = price;
  }
}

  let sortItem(a) {
    if (a.inCart == 'Not') return -1; 
    if (a.inCart == 'Yes') return 1; 
  }

  let showItem(a) {
    return a.name;
}
  
shopList.sort(shopItem.sortItem);
console.log(shopList.map(shopItem.showItem));
let newItem = new Item('Dessert', 2, 'Not');

shopList.push(newItem);
shopList.sort(shopItem.sortItem);
console.log(shopList.map(shopItem.showItem));


function totalPrice(shopList){
let sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);
*/





