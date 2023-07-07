"use strict";

let moviesArray = [
  "The Notebook",
  "The Shawshank redemption",
  "Mamma Mia!",
  "La La Land",
  "Pearl",
  "The Truman Show",
];

// console.log(moviesArray);

//pop

// console.log(moviesArray.pop());

//pop with function

const popFunction = (array) => {
  let removedPop = array[array.length - 1];
  array.length -= 1;
  return removedPop;
};

// console.log(popFunction(moviesArray));

//push

// console.log(moviesArray.push("Black Swan"));

//push with function

const pushFunction = (array, value) => {
  array[array.length] = value;
  return array.length;
};

// console.log(pushFunction(moviesArray, "Black Swan"));

//shift

// console.log(moviesArray.shift());

let shiftFunction = (array) => {
  let removed = array[0];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return removed;
};

// console.log(shiftFunction(moviesArray));

//unshift

// console.log(moviesArray.unshift("Black Swan"));

//unshift with function

const unshiftFunction = (array, value) => {
  array.length += 1;
  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array.length;
};

// console.log(unshiftFunction(moviesArray, "Black Swan"));

//reverse

// console.log(moviesArray.reverse());

const reverseFunction = (array) => {
  let newarray = [];
  for (let i = moviesArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < moviesArray.length; j++) {
      newarray[j] = array[i];
    }
  }
  return newarray;
};

// reverseFunction(moviesArray);

const mynewreverse = (array) => {
  let newarray = [];
  let i = 0;
  let j = array.length - 1;
  while (i < array.length) {
    newarray[j] = array[i];
    i++;
    j--;
  }
  return newarray;
};

// console.log(mynewreverse(moviesArray));

const lastReverse = (array) => {
  let newarray = [];
  let j = 0;
  for (let i = moviesArray.length - 1; i >= 0; i--) {
    newarray[j] = array[i];
    j++;
  }
  return newarray;
};

// console.log(lastReverse(moviesArray));

//vowel function

const input = prompt("Please enter your name: ");

const vowelFunction = (string) => {
  let vowels = [
    "a",
    "ı",
    "o",
    "u",
    "e",
    "ə",
    "i",
    "ö",
    "ü",
    "A",
    "I",
    "O",
    "U",
    "E",
    "Ə",
    "İ",
    "Ö",
    "Ü",
  ];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        count++;
      }
    }
  }
  console.log(
    count == 1
      ? `Your name has only one vowel!`
      : `Your name has ${count} vowels!`
  );
};

// vowelFunction(input);
