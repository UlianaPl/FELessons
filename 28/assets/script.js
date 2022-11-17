let userName = prompt("What is your name?")
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

    
