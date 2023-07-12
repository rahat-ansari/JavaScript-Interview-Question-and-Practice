// Q1. Function Defination 
// Ans: 
function square(num) {
  return num * num;
}

/**
 * 
 * @param {Array} theArr 
 * 
 * When you pass an array as a parameter, if the function changes any of the array's values, 
 * that change is visible outside the function, as shown in the 
 * following example:
 */

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

//console.log(arr[0]); // 45
myFunc(arr);
//console.log(arr[0]); // 30

// Q2. What is Function Expression
// Ans: Function assigned as variable


const squareFEx = function (num) {
  return num * num;
}
//console.log(squareFEx(5));

/**
 * Q3: What is First Class Function?
 * Ans: Where function can be treated as variable;
 * 
 */

function squreFirstClassFunc(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn);
}

//displaySquare(squreFirstClassFunc(5))


/**
 * Q4: What is IIFE
 * Ans: Immediately Invoked Function Expression (IIFE)
 */

(function squareIIFE(num) {
  //console.log(num * num);
})(5);

/**
 * Q5: IIFE - O/P Based Question?
 */
(function (x) {
  return (function (y) {
    // console.log(x);
  })(2)
})(1)

/**
 * Q6 - Function Scope
 */

const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

//console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

//console.log(getScore()); // "Chamakh scored 5"

/**
 * Q7: Function Scope - O/P Based Question
 */

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log(i);
  }, i * 1000);
}

//Output: 1, 2, 3, 4, 5;

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    // console.log(i);
  }, i * 1000);
}

//Output: 5;

/**
 * Q8: Function Hoisting 
 */

//hoisting();// Not hoisting like Variable

function hoisting() {
  console.log('Func is not hoisting');
}

/**
 * Q9: Function Hoisting O/P Based Question
 */

var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
}

//fun(); // Still value of x is undifined


/**
 * Q10. Params Vs Arguments
 */

function paramsVsArgument(num) { // Params
  return num * num;

}

paramsVsArgument(5)// Arguments

/**
 * Spread Vs Rest Operator
 */

function spreadVsRest(...arrSR) { // Rest Operator
  return arrSR[0] * arrSR[1];
}

var arrSR = [5, 6]

console.log(spreadVsRest(...arrSR)); //Spread Operator

/**
 * Q11. Params Vs Arguments - O/P Based Question
 */

const fn = (a, x, y, ...arrSR) => {
  console.log(x, y, arrSR);
}


fn(5, 6, 3, 2, 8, 9);// 6 3 [2, 8, 9]




