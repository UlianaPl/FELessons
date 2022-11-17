let number1 = 0.1,
    number2 = 0.2;
console.log((number1 * 10 + number2 * 10) / 10)
console.log((number1 + number2).toFixed(1))

let item1 = '1',
    item2 = 2;
console.log(item1 + item2)

let flashdriveSize = prompt("What is your flash drive size?")
    oneFile = 820
    howMany = (flashdriveSize / oneFile).toFixed(2)
alert(`Your flash drive has ${howMany} files, 820 Mb each`)
      
console.log(flashdriveSize, oneFile, howMany)

let howMuch = prompt("How much money do you have in your wallet?")
oneChocolate = 50
confirm("One chocolate costs 50 UAH")
howMany = (howMuch / oneChocolate).toFixed(1)
alert(`You can buy ${howMany} chocolates`)
      
console.log(howMuch, oneChocolate, howMany)

let countName = prompt("Please name a three-digit number")
countName = [...countName].reverse().join("");
 
alert(`Here is your three-digit number backwards - ${countName}`)
      
console.log(countName)

let howMany = prompt("How much money do you want to deposit with a rate of 5% per year?")
    howLong = 2
    sumPercent = ((howMany * 5 /100) / 12 * howLong).toFixed(2)
alert(`The amount of accrued interest on the deposit for 2 months is ${sumPercent}`)
      
console.log(sumPercent)

console.log(2 && 0 && 3)

console.log(2 || 0 || 3)

console.log(2 && 0 || 3)

