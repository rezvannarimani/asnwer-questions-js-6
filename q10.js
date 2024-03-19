//?Q-1:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85
 
function calculateCircleArea(r) {
return Math.floor(r*r*Math.PI);
}
 console.log(calculateCircleArea(3))

function calculateCircleCircumference(r, pi) {
return 2*r*pi;
}

// ------------------- seperator --------------------------
//?Q-2:Write a function called operation that calculate the square, double and cube of a number
//Get a number and operator from the user and calculate the number based on the operator.(^=square, **=double, ***=cube)
//example: squareNumber(3, ‘^’) = 9, 		doubleNumber(3, ‘**’) = 6, 	cubeNumber(3, ‘***’) = 27
function operation(a,operator) {
if(operator === '^'){
  return a*a;
}else if(operator === '**'){
  return 2*a;
}else if(operator === '***'){
  return a*a*a;
}else{
  "your request doesn't suport";
}
}
console.log(operation(3, '^'));
console.log(operation(3, '**'));
console.log(operation(3,'***'));

// ------------------- seperator --------------------------
//?Q-3:How many arguments can a function have?

// a)one
// b) two or three
// c)as many as we want
// d) none
//answer: c
// ------------------- seperator --------------------------
//?Q-4: write a function to calculate the square root of a number
// hint: use Math.sqrt()

function squareRootFunc(r) {
return Math.floor(Math.sqrt(r));
}
console.log(squareRootFunc(100));
squareRootFunc(100); // 10
squareRootFunc(4); // 2

// ------------------- seperator --------------------------

//?Q-5:What is the problem with this code?
function sum(num1, num2) {
 return num1 + num2;
}
console.log(sum(5, 9));
console.log(sum(12,13));