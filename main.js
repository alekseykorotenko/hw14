// let firstNumber = Number(prompt('Enter first number'));
// let secondNumber = Number(prompt('Enter second number'));
// let thirdNumber = Number(prompt('Enter third number'));

let sumNumber = 0;

for (let i = 0; i < 3; i++) {
  sumNumber += Number(prompt('Enter first number'));
}

let avgNumber = sumNumber / 3;

// let avgNumber = (firstNumber + secondNumber + thirdNumber) / 3;

alert(avgNumber);
