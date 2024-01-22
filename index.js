console.log("Hello World!");

let currentTemp = window.prompt(`{Please input a temperature}`);
let isRaining = true;

let Rain = () => {
  if (isRaining == true){
    return `It’s raining, too, so you should bring an umbrella!`
  }
  else {
    return `No rain today, you can leave the umbrella at home!`
  }
}

let weatherReport = () => {
  if (currentTemp <= 40 && isRaining == true) {
    return `It's ${currentTemp} degrees outside. Wear a heavy jacket. ${Rain()}`
  }
  else if (currentTemp <= 40 && isRaining !== true) {
    return `It's ${currentTemp} degrees outside. Wear a heavy jacket. ${Rain()}`
  }
  else if (currentTemp <= 60 && isRaining == true) {
    return `It's ${currentTemp} degrees outside. Wear a jacket. ${Rain()}`
  }
  else if (currentTemp <= 60 && isRaining !== true) {
    return `It's ${currentTemp} degrees outside. Wear a jacket. ${Rain()}`
  }
  else if (currentTemp <= 70 && isRaining == true) {
    return `It's ${currentTemp} degrees outside. Wear a light jacket. ${Rain()}`
  }
  else if (currentTemp <= 70 && isRaining !== true) {
    return `It's ${currentTemp} degrees outside. Wear a light jacket. ${Rain()}`
  }
  else if (isRaining == true) {
    return `It’s hot out today! No jacket needed! ${Rain()}`
  }
  else {
    return `It’s hot out today! No jacket needed! ${Rain()}`
  }
}

console.log(weatherReport());

const userName = "";

let newFunction = () => {
if (userName == true){
return `Hello ${userName}`
}
else if (userName !== true){
  return `Hello guest!`
}
}

console.log(newFunction());


let num1 = 31;
let num2 = 17;
let mathOp = window.prompt(`Please enter +, -, /, *, or %`);


let mathFunction = () => {
  if (mathOp === "+"){
    return `Sum of ${num1} and ${num2} is ${num1 + num2}`
  }
  else if (mathOp === '-'){
   return `Difference of ${num1} and ${num2} is ${num1 - num2}.`
  }
  else if (mathOp === '*'){
    return `Product of ${num1} and ${num2} is ${num1 * num2}`
  }
  else if (mathOp === '/') {
    return `Division of ${num1} and ${num2} is ${num1 / num2}.`
  }
  else if (mathOp === '%') {
return `Modulus of ${num1} and ${num2} is ${num1 % num2}`
  }
  else {
    return `${mathOp} is an invalid operation`
  }
}

console.log(mathFunction());

