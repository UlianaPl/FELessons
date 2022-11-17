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

