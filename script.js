// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.

// Minus
let minus50btn = document.getElementById("minus50");
let counter = 0;
let displayEl = document.getElementById("display");
let minus10btn = document.getElementById("minus10");
let minus1btn = document.getElementById("minus1");

// Story variables
let story = "Once upon a time, ";
let stringInEl = document.getElementById("strIn");
stringInEl.addEventListener("change", updateStory);
let storyEl = document.getElementById("strOut");
//plus
let plus50btn = document.getElementById("plus50");
let plus10btn = document.getElementById("plus10");
let plus1btn = document.getElementById("plus1");

// Event listener
minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);

plus50btn.addEventListener("click", plus50fcn);
plus10btn.addEventListener("click", plus10fcn);
plus1btn.addEventListener("click", plus1fcn);

// Random Numbers
let roundBtn1 = document.getElementById("rand1");
let roundBtn2 = document.getElementById("rand2");
let roundBtn3 = document.getElementById("rand3");
let roundBtn4 = document.getElementById("rand4");

// pic
let picBtn = document.getElementById("pic-btn");
let picContainer = document.getElementById("pic-container");

// Event functions
function minus50fcn() {
  // Update the value (JS)
  counter = counter - 50;
  // Use the counter to update the website (HMTL)
  displayEl.innerHTML = counter;
}

function minus10fcn() {
  counter -= 10; //same as counter = counter - 10

  displayEl.innerHTML = counter;
}

function minus1fcn() {
  counter--; //same as counter = counter - 1
  displayEl.innerHTML = counter;
}
// plus
function plus50fcn() {
  // Update the value (JS)
  counter = counter + 50;
  // Use the counter to update the website (HMTL)
  displayEl.innerHTML = counter;
}

function plus10fcn() {
  counter = counter + 10;

  displayEl.innerHTML = counter;
}

function plus1fcn() {
  counter = counter + 1;
  displayEl.innerHTML = counter;
}

function updateStory() {
  // save the users word to a variable
  let word = stringInEl.value;

  // Update the story variable (JS)
  story += word + " ";
  console.log(story);
  // Clear the input field
  stringInEl.value = "";

  // Update the site
  storyEl.innerHTML = story;
}

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);
function round1() {
  // Create random decimal 0 - 1
  let rand = Math.random();

  // Round to 3 decimal places
  rand = rand.toFixed(3);
  console.log(rand);

  // Update the site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  // let rand = Math.random() * (5 - -5) + -5;
  let rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  let randIn1 = Number(document.getElementById("rand-in1").value);
  let randIn2 = Number(document.getElementById("rand-in2").value);

  let rand = Math.random() * (randIn2 - randIn1) + randIn1;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
  console.log(rand);
}

// Random # from x to y:
// Math.random() * (y - x) + x

// E.g. If I want a random # from 1 to 3:
// var rand = Math.random() * (3 - 1) + 1

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML += "<img width='50px' src='images/reeses.png'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
document.getElementById("random-size").addEventListener("click", randSize);

function randSize() {
  let rand = Math.random() * (75 - 0) + 0;
  rand = Math.round(rand);
  document.getElementById("theBody").style.fontSize = rand + "px";
}

// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString
let rgbString = document.getElementById("HTML");
rgbCall = document.getElementById("random-rgb");
rgbCall.addEventListener("click", rgbBack);

function rgbBack() {
  let r = Number(Math.random() * (225 - 0) + 0);
  r = Math.round(r);
  let g = Number(Math.random() * (225 - 0) + 0);
  g = Math.round(g);
  let b = Number(Math.random() * (225 - 0) + 0);
  b = Math.round(b);
  console.log(r, g, b);

  let rainbow = `rgb(${r}, ${g}, ${b})`;
  console.log(rainbow);
  rgbString.style.background = rainbow;
}
// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
document.getElementById("reset").addEventListener("click", reload);

function reload() {
  // Counter
  counter = counter - counter;
  displayEl.innerHTML = counter;
  // Story
  story = `Once upon a time, `;
  storyEl.innerHTML = story;
  // Random values
  document.getElementById("rand1-out").innerHTML = "------";
  document.getElementById("rand2-out").innerHTML = "------";
  document.getElementById("rand3-out").innerHTML = "------";
  document.getElementById("rand4-out").innerHTML = "------";

  document.getElementById("rand-in1").value = "";
  document.getElementById("rand-in2").value = "";
  // Picture
  picContainer.innerHTML = "";
  // Random size
  document.getElementById("theBody").style.fontSize = 16 + "px";
  // Background
  rgbString.style.background = `rgb(154, 228, 200)`;
}
