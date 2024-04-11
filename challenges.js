//1

const foodToday = (breakfast, lunch, dinner) => {
  return `breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner}`;
};
console.log(foodToday("cereal", "toast", "pasta"));

//2
const pass = (num) => {
  if (num <= 0) {
    console.log("needs to be a positive number");
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("Fizzbuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};
pass(45);

//3
let addUp1 = (num1, num2) => {
  let sumTotal = num1 + num2;

  if (sumTotal % 2 == 0) {
    console.log(sumTotal);
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("both parameteres need to be numbers");
  } else {
    console.log(num1 * num2);
  }
};
addUp1("f", 4);

//4
let randomNumbers = [];
for (i = 0; i < 6; i++) {
  let numGen = Math.floor(Math.random() * 50) + 1;
  randomNumbers.push(numGen);
}
console.log(randomNumbers);

//5
const printNum = () => {
  let numArray = [];

  for (let i = 9; i >= 0; i--) {
    numArray.push(i);
  }

  return numArray;
};

let numbers = printNum();
console.log("Array containing numbers 9 to 0:", numbers);

//6

const printTables = (number) => {
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
};

let givenNumber = 7;
console.log(`Multiplication table for ${givenNumber}:`);
printTables(givenNumber);

//7

let calculateAverage = (math, science, english) => {
  let average = (math + science + english) / 3;

  if (average >= 90) {
    console.log("You got an A grade");
  } else if (average >= 80) {
    console.log("You got a B grade");
  } else if (average >= 70) {
    console.log("You got a C grade");
  } else {
    console.log("You did not pass");
  }
};

calculateAverage(90, 70, 80);
