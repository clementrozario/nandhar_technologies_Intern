class Person{
    #age;
    country = "India"
    constructor(name,age){
        this.name = name;
        this.#age = age;
    }
    greet(){
        console.log(`hello,${this.name} and your age is ${this.#age} from ${this.country}`);
    }
    getAge(){
        return this.#age;
    }
    static isAdult(age){
        return age >= 18;
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
    study(){
        console.log(`hello ${this.name} your grade is:${this.grade} and you are from ${this.country}`);
    }
}

const student = new Student("clement",27,8.34);

console.log(student.country);

student.country= "france";
// console.log(student.country) we cannot call static methods on instance
student.greet();
student.study();

console.log(Person.isAdult(20));
console.log(Person.isAdult(15));


console.log(student.getAge());
// console.log(student.#age); cannot access directly the instance

