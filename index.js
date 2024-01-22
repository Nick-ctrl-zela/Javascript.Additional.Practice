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
let num1 = 5;
let num2 = 3;
let mathAdd = "add";
let mathSub = "subtract";
let mathDiv = "divide";
let mathMul = "multiply";

let newFunction = () => {
if (userName == true){
return `Hello ${userName}`
}
else if (userName !== true){
  return `Hello guest!`
}
}

console.log(newFunction());

// let mathFunction = () => {
//   if ()
// }

console.log(num1, mathAdd, num2);
