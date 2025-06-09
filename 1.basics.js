// string
const userName = "clement";
const len = userName.length;
console.log(len);
console.log(userName);
const upper = userName.toUpperCase();
console.log(upper);

// numbers
const num1 = 17
const num2 = 68
const add = num1 + num2;
const sub = num2 - num1;
const mul = num1 * num2;
const div = num2 / num1;

console.log(`the results for add is:${add} ,sub is:${sub}, mul is:${mul},div is:${div}`);

const num3 = 0;
const num4 = 0;
console.log(`result is:${num3/num4}`)

const num5 = 1;
const num6 = 0;
console.log(`result is:${num5/num6}`)

//Boolean
 const isAwake = true;
 const output = !isAwake;
console.log(`the result of boolean is :${output}`);

//object
const car = {
    color:"red",
    year:2019,
    isElectric:false,
}

car.color="green"

console.log(`the car color is:${car.color}`);
console.log(`the car year is:${car['year']}`);

// Array:

const foods = ["briyani","fried rice","parotta","chicken 65","shawarma"];

const numbers = foods.length;
console.log(numbers);

const firstItem = foods[0];
console.log(firstItem);

foods.push("new food");
console.log(foods)

// function:
function adding (a,b){
    return a+b;
}
const result = adding(7,6);
console.log(`the function of add result is:${result}`);

// parseInt /parseFloat:
console.log(parseInt("25.7px"));
console.log(parseFloat("25.7px"));

const addStrings = "10" + "20";
console.log(addStrings);

const addStringWithParse = parseInt("10") + parseInt("20");
console.log(addStringWithParse);

