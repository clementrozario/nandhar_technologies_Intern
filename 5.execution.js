// 1. Memory Creation Phase (aka Variable Environment Setup)
// JS allocates memory for variables, functions, etc.

// Variables declared with var are initialized with undefined.

// let and const are hoisted too but are not initialized (this is the Temporal Dead Zone).

// Function declarations are hoisted with the entire function.

// function greet() {
//   console.log(`Hello, ${this.name}`);
// }
// const person = { name: "Charlie" };
// // Fix this:
// greet.call(person); // should log: Hello, Charlie


function add(x,y){
    let result = x +y;
    return result;
}

function adding(){
    let x=2;
    let y=3;
    let output = add(x,y);
    console.log('sum is:',output);
}

adding();

