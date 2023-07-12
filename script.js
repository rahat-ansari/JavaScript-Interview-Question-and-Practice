// var vs let vs const

// let & const can not be redeclared in the same scope

let a;
let b;

// variable shadowing
function test() {
  let a = 'hellow'
  if (true) {
    let a = 'hi'
    console.log(a);
  }
  console.log(a);
}

//test();


//map vs forEach
const Arr = [1, 2, 3, 4];


// Map
const mapResult = Arr.map((param, _i, _arr) => {
  return param + 2;
}).filter((param, _i, _arr) => {
  return param % 2;
})

//console.log(mapResult)

//  Pollyfill for map
Array.prototype.mapPollyFill = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }

  return temp;
}


const resultMapPollyFill = Arr.mapPollyFill((val, _i, _arr) => {
  return val + 2;
})

//console.log(resultMapPollyFill)



// filter
const mapResultFilter = Arr.filter((val, _i, _arr) => {
  return val > 2;
})

//  Pollyfill for filter
Array.prototype.filterPollyFill = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i])
    }
  }

  return temp;
}


const resultFilterPollyFill = Arr.filterPollyFill((val, _i, _arr) => {
  return val > 2;
})

//console.log(resultFilterPollyFill);


// reduce
const mapResultReduce = Arr.reduce((acc, curr, _i, _arr) => {
  return acc + curr;
}, 0)


//console.log(mapResultReduce)

//  Pollyfill for reduce

Array.prototype.reducePollyFill = function (cb, initialValue) {
  accumalator = initialValue
  for (let i = 0; i < this.length; i++) {
    accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
  }

  return accumalator;
}

const resultReducePollyFill = Arr.reducePollyFill((acc, curr, _i, _arr) => {
  return acc + curr;
}, 0)


//console.log(resultReducePollyFill)



// foreach
const foreachResult = Arr.forEach((val, i) => {
  return Arr[i] = val + 5;
})

// console.log(mapResult, foreachResult, arr)

let userArr = [
  { name: 'moly', rollNumber: 1, marks: 79 },
  { name: 'ruhama', rollNumber: 2, marks: 85 },
  { name: 'rabita', rollNumber: 3, marks: 100 },
  { name: 'robin', rollNumber: 4, marks: 30 },
]

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments)
      func = null;
    }

    return ran;
  }
}

const hello = (() => { console.log("hello"); })

hello();
hello();
hello();
hello();






//null vs undefined

// console.log(typeof(null));
// console.log(typeof(undefined));
//  let a = null;
// console.log(a);
//console.log(undefined);

// Event deligation
// document.querySelector("#products").addEventListener('click',(event)=>{
//  console.log(event);
// })

// let promise = new Promise((resolve, reject) => setTimeout(() => resolve(100), 3000));

// // tasks to be completed after promise resolution

// promise.then((val) => console.log(val)).catch(err => console.log(err));


