let num1 = 10;
let num2 = 3.5;

let addition = num1 + 5;
let subtraction = num1 - 2;
let multiplication = num1 * 3;
let division = num1 / 2;
let modulus = num1 % 3;
let exponentiation = num1 ** 2;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Modulus: ${modulus}`);
console.log(`Exponentiation: ${exponentiation}`);

let isEqual = num1 === num2;
let isNotEqual = num1 !== num2;
let isGreater = num1 > num2;
let isLess = num1 < num2;
let isGreaterOrEqual = num1 >= num2;
let isLessOrEqual = num1 <= num2;

console.log(`Is Equal: ${isEqual}`);
console.log(`Is Not Equal: ${isNotEqual}`);
console.log(`Is Greater: ${isGreater}`);
console.log(`Is Less: ${isLess}`);
console.log(`Is Greater Or Equal: ${isGreaterOrEqual}`);
console.log(`Is Less Or Equal: ${isLessOrEqual}`);

let x = 8;
let y = 12;

console.log(`Is x greater than y: ${x > y}`);
console.log(`Is x less than or equal to y: ${x <= y}`);
console.log(`Is x equal to y: ${x === y}`);
console.log(`Is x not equal to y: ${x !== y}`);

let a = true;
let b = false;

console.log(`a AND b: ${a && b}`);
console.log(`a OR b: ${a || b}`);
console.log(`NOT a: ${!a}`);

let p = 10;

p += 5;
console.log(`p += 5: ${p}`);

p -= 3;
console.log(`p -= 3: ${p}`);

p *= 2;
console.log(`p *= 2: ${p}`);

p /= 4;
console.log(`p /= 4: ${p}`);

p %= 3;
console.log(`p %= 3: ${p}`);