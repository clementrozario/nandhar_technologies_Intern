

//for:
const favMovies = ["Schindler's List","The Shawshank Redemption","Inception"];
for(const movie of favMovies){
    console.log(`- ${movie}`);
}

// "&&"" and "||"" operators
let hasCoffee = true;
let isTired = true;

if(hasCoffee && isTired){
    console.log("I'm Tired but i have Coffee");
}

hasCoffee = false;

if(!hasCoffee || isTired){
    console.log("I should get some coffee or take a nap.")
}
// Ternary operator
let userRole = "admin";

let canAccess = userRole==="admin" ? "Full Access" : "Limited Access";

console.log(canAccess);

// classes
class Car {
    constructor(make,model,year){
        this.make= make;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `A ${this.year} ${this.make} ${this.model} model`;
    }
}
    const myCar = new Car("Toyato","Fortuner",2023);
    const yourCar = new Car("Skoda","Kushaq",2022);

    console.log(myCar.getDescription());
    console.log(yourCar.getDescription());

    // Utility objects:

        // 1.genrate a dice:

        function generate(){
            let dice = Math.floor(Math.random()*6)+1;
            console.log(dice);
        }
        generate();

        // 2.Date:

        let birthday = new Date("October 5,2025");

        let today = new Date();

        let diffinms = birthday - today;
        
        let msperday = 1000 * 60 * 60 * 24;
        let diffInDays = Math.floor(diffinms/msperday);

        console.log(diffInDays);

        //3. JSON:

        const carDetailsstrings = JSON.stringify(myCar); //we have already created object above
        console.log(carDetailsstrings);

        const parsing = JSON.parse(carDetailsstrings);
        console.log(parsing);

