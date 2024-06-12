//temperatureCheck
//if-Else-Statements
let temperature = 22;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature > 15 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

//switchStatements
let temp = 22;

switch (true) {
  case temp < 0:
    console.log("It's freezing!");
    break;
  case temp >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temp > 15 && temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

//Divisibility
//if-Else-Statements
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

//switchStatements
let units = 12;

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let no = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

const digits = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const numbers = [3, 7, 2, 5, 10, 6];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);

let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

let b = 2;
while (b <= 20) {
  console.log(b);
  b += 2;
}

let total = 0;
let c = 1;
while (c <= 100) {
  total += c;
  c++;
}
console.log(sum);

let d = 5;
while (d < 50) {
  console.log(d);
 d += 5;
}

let f = 1;
do {
  console.log(f);
  f++;
} while (f <= 10);

let sum = 0;
let i = 1;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log(sum);










