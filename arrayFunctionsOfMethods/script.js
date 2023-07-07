"use strict";

let moviesArray = [
  "The Notebook",
  "The Shawshank redemption",
  "Mamma Mia!",
  "La La Land",
  "Pearl",
  "The Truman Show",
];

console.log(moviesArray);

//pop

// moviesArray.pop();

// console.log(moviesArray);

//pop with function

const popFunction = (array) => {
  array.length = array.length - 1;
  return array;
};

// console.log(popFunction(moviesArray));

//push

// moviesArray.push("Black Swan");

// console.log(moviesArray);

//push with function

const pushFunction = (array, value) => {
  array[array.length] = value;
  return array;
};

// console.log(pushFunction(moviesArray, "Black Swan"));

//shift

// moviesArray.shift();

// console.log(moviesArray);

let shiftFunction = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return array;
};

// console.log(shiftFunction(moviesArray));

//unshift

// moviesArray.unshift("Black Swan");

// console.log(moviesArray);

//unshift with function

const unshiftFunction = (array, value) => {
  array.length += 1;
  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
};

// console.log(unshiftFunction(moviesArray, "Black Swan"));
