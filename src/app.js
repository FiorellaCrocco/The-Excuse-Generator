/* /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let excusas;

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "during my lunch",
  "while I was praying"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function stringRandom(array) {
  let numeroRandom = getRandomInt(0, array.length);
  return array[numeroRandom];
}

let quien = stringRandom(who);
let accion = stringRandom(action);
let que = stringRandom(what);
let cuando = stringRandom(when);
document.getElementById("excuse").innerHTML =
  quien + " " + accion + " " + que + " " + cuando;
