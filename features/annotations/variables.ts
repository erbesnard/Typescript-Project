let apples = 5;

let speed: string = "too fast";

let hasName: boolean = true;

let nothingmuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "bluen"];

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function

const locNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Annotations
// 1) function that require the 'any' typicode

const json = '{"x": 10, "y": 10}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// when we declare a variable on one line and initialize it later

let words = ["red", "green", "blue"];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly

let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i > number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}
