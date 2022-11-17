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
let m = prompt("Введіть початок діапазону","")
let n = prompt("Введіть кінець діапазону","")
let sum = 0;
 
while(m < n) {
 
       m++;
       sum+=m;    
    }
 
alert(sum)
console.log(sum)

let a = prompt("Enter the starting number of the range","")
    b = prompt("Specify the end of the range number", "")


let c = +prompt('Введіть число');
 
for (let i = 2; i * 2 <= c; i++) {
    if (c % i == 0) {
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


let paySum = prompt("Яка сума покупки?")
    
if (paySum>200 && paySum< 300) {
    let discount = paySum * 0.03;
    alert(`Ваша знижка становить: ${discount}`);
} else if (paySum>300 && paySum< 500) {
    let discount = paySum * 0.05;
    alert(`Ваша знижка становить: ${discount}`);
} else if (500 <= paySum) {
    let discount = paySum * 0.07
    alert(`Ваша знижка становить: ${discount}`);
}


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let currDay = 0;
while (confirm(`${days[currDay]}. Do you want to see what day is the next day of the week?`)) {
    currDay = (currDay + 1) % days.length;
}

