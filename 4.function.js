// function declaration
sayHello(); //can call before hoisted
function sayHello(){
    console.log("hey hi! and BYE")
}

// function expression
function sayHiiii(){
    console.log("hey hi!from expression")
}
sayHiiii();

// arrow function
const formatGreetingArrow = (name,greeting="Hello") => {
         return `${greeting} ${name}`;
}

// arrow functions with Rest parameters
const formatGreetingWithExtras = (name,greeting="Hello",...extras) => {
    const extraWords = extras.join(" ");
    return `${greeting} ${name} ${extraWords}`;
}

console.log(formatGreetingArrow("clem"));
console.log(formatGreetingWithExtras("clem","welcome","to","the","team"));
//------------------------------------------------------------------------------------------
// call,apply bind:

const john = {
    name:"john",
    age:25,
    introduce:function(){
        console.log(`Hi,I'm ${this.name} and I'm ${this.age} years old`);
    }
};

const mary = {
    name:"mary",
    age:30,
    
};
john.introduce.call(mary); //call

const maryIntroduce = john.introduce.bind(mary);
maryIntroduce();// bind provides a separte copy for mary
john.introduce();
//--------------------------------------------------------------------------------
function count(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const counter = count();
counter(); //1

// recursive function
function factorial(n){
    if(n===0) return 1
    return n * factorial(n-1);
}

console.log(factorial(5));